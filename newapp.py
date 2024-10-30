import datetime
from typing import List
from flask import Flask, jsonify, request
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, session 
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import select, delete
from marshmallow import fields, validate, ValidationError


app = Flask(__name__)
ma = Marshmallow(app)
app.config

class Base(DeclarativeBase):
    pass