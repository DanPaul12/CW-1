import { Component, useState } from 'react'
import CustomerList from './components/customerList'
import OrderList from './components/orderList'


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
    const { selectedCustomerID, selectedOrder } = this.state
      
      return (
            <div id='container'>
              <h3>Customer List</h3>
              <CustomerList onCustomerSelect = {this.handleCustomerSelect}/>
              {selectedCustomerID && (
                        <p> Customer id is {selectedCustomerID}</p>
                    )}
              <OrderList 
                customerID = {selectedCustomerID}
                onOrderSelect = {this.handleOrderSelect}/>
            </div>

        )
  }
  
};

export default App
