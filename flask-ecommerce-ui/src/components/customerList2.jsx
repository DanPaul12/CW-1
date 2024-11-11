import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


const CustomerList2 = ({customers, onEdit, onPlaceOrder}) => {
    
    const deleteCustomer =  async (id) => {
        try{
        await axios.delete(`http://127.0.0.1:5000/customers/${id}`)
        }catch{
            console.log('Cannot be deleted: Member has associated order')
        }
    }    //why not async
        //cant delete customers with orders


    return(
        <div className="customers">
            <h3>Customers</h3>
            <ul>
                {customers.map(customer => (
                    <li key = {customer.id}>
                        ID: {customer.id}, Name: {customer.name}
                        <button onClick={() => onEdit(customer)}>Edit</button>
                        <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
                        <Link to={'/orders'}>
                        <button onClick={() => onPlaceOrder(customer)}>Place Order</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CustomerList2