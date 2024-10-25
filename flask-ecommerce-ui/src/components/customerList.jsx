import { Component } from "react";

class CustomerList extends Component {
    constructor(props){
        super(props)
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
        this.props.onCustomerSelect(id)
    }

    render(){
        const {customers} = this.state;

        return(
            <div className="list">
                <h3>Customers</h3>
                <ul>
                    {customers.map(customer => (
                        <li key = {customer.id} onClick={()=>this.selectCustomer(customer.id)}> 
                        {customer.name}</li>
                    ) )}
                </ul>
            </div>
            
        )

    }

};

export default CustomerList