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
    id = fields.Integer()
    name = fields.String(required=True)
    email = fields.String(required=True)
    phone = fields.String(required=True)


customer_schema = CustomerSchema()
customers_schema = CustomerSchema(many=True)

class Product(db.Model):
    __tablename__ = 'Products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String (255), nullable = False)
    price = db.Column(db.Float, nullable = False)

class ProductSchema(ma.Schema):
    id = fields.Integer()
    name = fields.String(required=True)
    price = fields.String(required=True)

product_schema = ProductSchema()
products_schema = ProductSchema(many=True)

class Order(db.Model):
    __tablename__ = 'Orders'
    id = db.Column(db.Integer, primary_key = True)
    date = db.Column(db.Date, nullable = False)
    customer_id = db.Column(db.Integer, db.ForeignKey("Customer.id"))

class OrdersSchema(ma.Schema):
    id = fields.Integer()
    date = fields.String(required=True)
    customer_id = fields.Integer()

order_schema = OrdersSchema()
orders_schema = OrdersSchema(many=True)


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

@app.route('/customers/<int:id>', methods = ['DELETE'])
def delete_customer(id):
    try:
        customer = Customer.query.get_or_404(id)
        db.session.delete(customer)
        db.session.commit()
        return jsonify({"message":"member deleted"}), 201
    except ValidationError as error:
        return jsonify(error.messages), 404

@app.route('/customers/<int:id>', methods = ['PUT'])
def update_customer(id):
    try:
        customer = Customer.query.get_or_404(id)
        new_info = customer_schema.load(request.json)
        customer.name = new_info['name']
        customer.email = new_info['email']
        customer.phone = new_info['phone']
        db.session.commit()
        return jsonify({"message":"member updated"}), 201
    except ValidationError as error:
        return jsonify(error.messages), 404


@app.route('/products', methods= ['GET'])
def get_products():
    try:
        query = select(Product)
        result = db.session.execute(query).scalars()
        products = result.all()
        return products_schema.jsonify(products)
    except ValidationError as error:
        return jsonify(error.messages), 404

@app.route('/products', methods = ['POST'])
def post_products():
    try:
        product_data = product_schema.load(request.json)
        product = Product(name = product_data['name'], price = product_data['price'])
        db.session.add(product)
        db.session.commit()
        return jsonify({'message': 'product added'}), 200
    except ValidationError as error:
        return jsonify(error.messages), 404

@app.route('/products/<int:id>', methods=['PUT'])
def update_product(id):
    try:
        product_info = Product.query.get_or_404(id)
        new_info = product_schema.load(request.json)
        product_info.name = new_info['name']
        product_info.price = new_info['price']
        db.session.commit()
        return jsonify({'message':'product updated'}), 201
    except ValidationError as error:
        return jsonify(error.messages), 404

@app.route('/products/<int:id>', methods = ['DELETE'])
def delete_product(id):
    try:
        product = Product.query.get_or_404(id)
        db.session.delete(product)
        db.session.commit()
        return jsonify({'message':'product deleted'}), 201
    except ValidationError as error:
        return jsonify(error.messages), 404

@app.route('/orders', methods=['POST']) 
def add_order():
    try:
        order_data = order_schema.load(request.json)
        order = Order(date = order_data['date'], customerid = order_data['customer_id'])
        db.session.add(order)
        db.session.commit()
        return jsonify({'message': 'order added'}), 200
    except ValidationError as error:
        return jsonify(error.messages), 404



#--------------------------------------------------------------------------------------

if __name__ == "__main__":
    app.run(debug=True)
