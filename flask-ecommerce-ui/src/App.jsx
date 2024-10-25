import { Component, useState } from 'react'
import CustomerList from './components/customerList'


class App extends Component{
  constructor(props){
    super(props)
      this.state = {selectedCustomerID : null}
    }


  handleCustomerSelect = (customerID) => {
    this.setState({selectedCustomerID : customerID})
  }

  render() {
    const { selectedCustomerID } = this.state
      
      return (
            <div id='container'>
              <h3>Customer List</h3>
              <CustomerList onCustomerSelect = {this.handleCustomerSelect}/>
              {selectedCustomerID && (
                        <p> Customer id is {selectedCustomerID}</p>
                    )}
            </div>

        )
  }
  
};

export default App
