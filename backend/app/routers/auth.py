from .. import models,schemas,utils,oauth2
from fastapi import FastAPI,Response,status,HTTPException,Depends,APIRouter
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from typing import List
from .. import database 



router = APIRouter(tags=['Authentication'])

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
    }
    print(user_data)

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