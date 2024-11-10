import { useState } from "react"
import axios from "axios"


const CustomerList2 = ({customers}) => {
    
    const deleteCustomer =  (id) => {
         axios.delete(`http://127.0.0.1:5000/customers/${id}`)
    }    //why not async
        //cant delete customers with orders


    return(
        <div className="customers">
            <h3>Customers</h3>
            <ul>
                {customers.map(customer => (
                    <li key = {customer.id}>
                        ID: {customer.id}, Name: {customer.name}
                        <button >Edit</button>
                        <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CustomerList2