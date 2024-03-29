from .. import models,schemas,utils,oauth2
from fastapi import FastAPI,Response,status,HTTPException,Depends,APIRouter, Query
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from typing import List, Optional
from .. import database 
from ..oauth2 import oauth2_scheme,verify_access_token
from sqlalchemy import func



router = APIRouter(tags=['Cruds'])

@router.post("/login")
async def login(user_credentials:OAuth2PasswordRequestForm = Depends(),db:Session = Depends(database.get_db)):
    
    #it has two things -- username and password
    user = db.query(models.User).filter(models.User.email==user_credentials.username).first()
    

    if not user:
        raise HTTPException(
            status_code = status.HTTP_403_FORBIDDEN , detail = f"Invalid Credentials!"
            )
    if not utils.verify(user_credentials.password,user.password):
        raise HTTPException(
            status_code = status.HTTP_403_FORBIDDEN , detail = f"Invalid Credentials!"
            )
    
    user_data = {
        "id": user.id,
        "email": user.email,
        "role":"authenticated"
    }

    access_token = oauth2.create_access_token(data = {"user_id":user.id})
  
    return {"access_token":access_token,"token_type":"bearer","user":user_data}

# @router.post("/login")
# def login(user_credentials: schemas.UserLogin,db:Session = Depends(database.get_db)):
#     user = db.query(models.User).filter(models.User.email==user_credentials.email).first()
#     if not user:
#         raise HTTPException(
#             status_code = status.HTTP_404_NOT_FOUND , detail = f"Invalid Credentials!"
#             )
#     if not utils.verify(user_credentials.password,user.password):
#         raise HTTPException(
#             status_code = status.HTTP_404_NOT_FOUND , detail = f"Invalid Credentials!"
#             )
        
#     access_token = oauth2.create_access_token(data = {"user_id":user.id})
#     return {"access_token":access_token,"token_type":"bearer"}


@router.get("/api/user")
async def get_user_from_token(token: str = Depends(oauth2_scheme),db:Session = Depends(database.get_db)):
    try:
        credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,detail=f"Could not validate Credentials!",
        headers={"WWW-Authenticate":"Bearer"})
        user_id =  verify_access_token(token,credentials_exception)
        if user_id is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
        
        user = db.query(models.User).filter(models.User.id==user_id.id).first()
        user_data = {
        "id": user.id,
        "email": user.email,
        "role":"authenticated"
        }

        if user is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found")
        return user_data
    except HTTPException as e:
        raise e
    except Exception as e:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Internal server error")


@router.post("/create",status_code = status.HTTP_201_CREATED,response_model=schemas.Post)
def create_posts(post:schemas.PostCreate,db:Session=Depends(database.get_db),current_user:int = Depends(oauth2.get_current_user)):
    # cursor.execute(""" INSERT INTO posts(title,content,published) VALUES (%s,%s,%s) RETURNING * """
    #                ,(post.title,post.content,post.published))
    # #save it in new_post
    # new_post = cursor.fetchone()
    # #commit to save post in database
    # conn.commit()
    # new_post = models.Post(title = post.title, content = post.content,published = post.published)
   
    new_post = models.Post(owner_id = current_user.id,**post.dict())
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    return new_post





@router.get("/all")
def get_posts(db:Session=Depends(database.get_db),current_user:int = Depends(oauth2.get_current_user)):

    posts = db.query(models.Post).filter(models.Post.owner_id == current_user.id).all()
    return  posts



@router.delete("/post/{id}",status_code = status.HTTP_204_NO_CONTENT)
def delete_post(id:int,db:Session=Depends(database.get_db),current_user:int = Depends(oauth2.get_current_user)):
    #find index of specific post
    # cursor.execute("""  DELETE FROM posts WHERE id =%s RETURNING *""",(str(id)))
    # deleted_post = cursor.fetchone()
    # conn.commit()
    post_query = db.query(models.Post).filter(models.Post.id == id)
    post = post_query.first()
    if(post == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND,detail = f"Post with id {id} not Found!")
    if post.owner_id!=current_user.id:
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN,detail = f"Not Authorized to perform this Action!")
    # delete it from the array
    # my_posts.pop(index)
    #in 204 , no data is returned 
    post_query.delete(synchronize_session=False)
    db.commit()
    return Response(status_code = status.HTTP_204_NO_CONTENT)



@router.put("/postedit/{id}",response_model=schemas.Post)
def update_post(id:int,updated_post:schemas.PostCreate,db:Session=Depends(database.get_db),current_user:int = Depends(oauth2.get_current_user)):
    
    # cursor.execute("""UPDATE posts SET title = %s ,content = %s ,published = %s WHERE id = %s RETURNING *"""
    #                , (post.title,post.content,post.published,str(id)))
    # updated_post = cursor.fetchone()
    # conn.commit()
    post_query = db.query(models.Post).filter(models.Post.id == id)
    post = post_query.first()
    if(post == None):
        raise HTTPException(status_code = status.HTTP_404_NOT_FOUND,detail = f"Post with id {id} not Found!")
    if post.owner_id!=current_user.id:
        raise HTTPException(status_code = status.HTTP_403_FORBIDDEN,detail = f"Not Authorized to perform this Action!")
    post_query.update(updated_post.dict(),synchronize_session=False)
    db.commit()
    return post_query.first()



PAGE_SIZE = 5  # Number of posts per page

@router.get("/posts")
def get_posts(page: int = Query(1, ge=1), db: Session = Depends(database.get_db),current_user:int = Depends(oauth2.get_current_user)):
    from_index = (page - 1) * PAGE_SIZE
    to_index = from_index + PAGE_SIZE
    
    posts = db.query(models.Post).filter(models.Post.owner_id == current_user.id).slice(from_index, to_index).all()
    total_count = db.query(models.Post).filter(models.Post.owner_id == current_user.id).count()
    
    return {"data": posts, "count": total_count}