from .. import models,schemas,oauth2
from fastapi import FastAPI,Response,status,HTTPException,Depends,APIRouter
from sqlalchemy.orm import Session
from typing import List
from .. database import engine,get_db
from typing import Optional
from sqlalchemy import func


router = APIRouter(
  
    tags=['Posts']
)



@router.post("/create",status_code = status.HTTP_201_CREATED,response_model=schemas.Post)
def create_posts(post:schemas.PostCreate,db:Session=Depends(get_db),current_user:int = Depends(oauth2.get_current_user)):
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







    

