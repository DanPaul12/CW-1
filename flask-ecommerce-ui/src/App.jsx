import { Component, useState } from 'react'
import CustomerList from './components/customerList'
import OrderList from './components/orderList'
import ProductList from './components/productList'
import CustomerForm from './components/customerForm'
import ProductForm from './components/productForm'


class App extends Component{
  constructor(props){
    super(props)
      this.state = {selectedCustomerID : null}
      this.state = {selectedOrder : null}
    }


  handleCustomerSelect = (customerID) => {
    this.setState({selectedCustomerID : customerID})
  }

  handleOrderSelect = (orderID) => {
    this.setState({selectedOrder : orderID})
  }

  render() {
    const { selectedCustomerID, selectedOrder} = this.state
      
      return (
            <div id='container'>
              <CustomerForm />
              <ProductForm />
              <CustomerList onCustomerSelect = {this.handleCustomerSelect}/>
              {selectedCustomerID && (
                        <p> Customer id is {selectedCustomerID}</p>
                    )}
              {selectedCustomerID &&
              (<OrderList 
                customerid = {selectedCustomerID}
                onOrderSelect = {this.handleOrderSelect}
                />
              )}
              {selectedOrder &&
              <ProductList 
                orderID={selectedOrder}/>}
            </div>

        )
  }
  
};

export default App
