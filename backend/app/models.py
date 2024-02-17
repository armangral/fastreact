from sqlalchemy import  Column,String,Integer,Boolean,ForeignKey
from sqlalchemy.sql.expression import null,text
from .database import Base
from sqlalchemy.sql.sqltypes import TIMESTAMP
from sqlalchemy.orm import relationship




class User(Base):
    __tablename__ = "users"
    id = Column(Integer,primary_key=True,nullable=False)
    email = Column(String,nullable=False,unique=True)
    password = Column(String,nullable=False)
    created_at = Column(TIMESTAMP(timezone=True),nullable=False,server_default=text('now()'))
    
    
