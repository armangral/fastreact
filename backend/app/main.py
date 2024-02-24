from fastapi import FastAPI
from . import models
from . database import engine
from . routers import cruds
from fastapi.middleware.cors import CORSMiddleware

# models.Base.metadata.create_all(bind =engine)
app = FastAPI()

origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

    
@app.get("/")
async def read_root():
    return {"Created by AbdulRehman"}


app.include_router(cruds.router)
