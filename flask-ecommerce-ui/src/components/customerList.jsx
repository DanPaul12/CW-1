import { Component } from "react";

class CustomerList extends Component {
    constructor(props){    //what is this taking in?
        super(props)        //what is deal with constructor/ super? how much class components?
        this.state = {
            customers : [],
            selectedCustomerId : null}}


    componentDidMount() {
        const fetchedCustomers = [
            {id: 1, name: 'Alice'},
            {id: 2, name: 'Bob'},
        ]
        this.setState({customers : fetchedCustomers})
    }

    selectCustomer = (id) => {
        this.setState({selectedCustomerId : id});
        this.props.onCustomerSelect(id) //is this the props were taking in? 
    }

    render(){
        const {customers} = this.state;

        return(
            <div className="list">
                <h3>Customers</h3>
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