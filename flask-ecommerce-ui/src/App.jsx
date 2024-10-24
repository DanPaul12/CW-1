import { Component, useState } from 'react'


class App extends Component{
  constructor(props){
    super(props)
      this.state = {selectedCustomerID : null}
    }
};

  handleCustomerSelect = (customerID) => {
    this.setState({selectedCustomerID : customerID})
  }

  render() {
    return (


    )
  }
  


export default App
