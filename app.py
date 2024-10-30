from flask import Flask
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
app.config['SQLALCHEMY_DATABASE_URI']= 'mysql+mysqlconnector://root:thegoblet2@localhost/e_commerce_db'

class Base(DeclarativeBase):
    pass

ma = Marshmallow(app)
db = SQLAlchemy(app)
CORS(app)

#----------------------------------------------------------------------------

class Customer(db.Model):
    __tablename__ = 'Customer'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String (255), nullable = False)
    email = db.Column(db.String (320))
    phone = db.Column(db.String (15))

class CustomerSchema(ma.Schema):
    name = fields.String(required=True)
    email = fields.String(required=True)
    phone = fields.String(required=True)

class CustomersSchema(ma.Schema):
    name = fields.String(required=True)
    email = fields.String(required=True)
    phone = fields.String(required=True)

customer_schema = CustomerSchema()
customers_schema = CustomersSchema(many=True)


#-------------------------------------------------------------------------------

@app.route('/customers', methods=['POST']) 
def add_customer():
    try:
        cusomer_data = customer_schema.load(request.json)
        customer = Customer(name = cusomer_data['name'], email = cusomer_data['email'], phone = cusomer_data['phone'])
        db.session.add(customer)
        db.session.commit()
        return jsonify({'message': 'customer added'}), 200
    except ValidationError as error:
        return jsonify(error.messages), 404

@app.route('/customers', methods = ['GET'])
def get_cusomers():
    try:
        query = select(Customer)
        result = db.session.execute(query).scalars()
        customers = result.all()
        return customers_schema.jsonify(customers)
    except ValidationError as error:
        return jsonify(error.messages), 404


#--------------------------------------------------------------------------------------

if __name__ == "__main__":
    app.run(debug=True)
