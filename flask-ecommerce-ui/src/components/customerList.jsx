import { Component } from "react";
import axios from 'axios'

class CustomerList extends Component {
    constructor(props){       //what is this taking in?
        super(props)          //what is deal with constructor/ super? how much class components?
        this.state = {
            customers : [],
            selectedCustomerId : null}}


    componentDidMount() {
        axios.get('http://127.0.0.1:5000/customers')
        .then(response => {
            this.setState({customers : response.data})
        })
        .catch(error => 
            console.error('Error:', error)
        )
    }

    selectCustomer = (id) => {
        this.setState({selectedCustomerId : id});
        this.props.onCustomerSelect(id)    //is this the props were taking in? 
    }                                      //overall dynamic of what's feeding into what

    render(){
        const {customers} = this.state;

        return(
            <div className="list">
                <h3>Customer List</h3>
                <ul>
                    {customers.map(customer => (
                        <li key = {customer.id} onClick={()=>this.selectCustomer(customer.id)}> 
                        {customer.name}</li>  // why does this one need arrow function but not form ones?
                    ))}
                </ul>
            </div>
            
        )

    }

};

export default CustomerList