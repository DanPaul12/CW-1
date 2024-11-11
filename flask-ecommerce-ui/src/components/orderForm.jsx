import { useEffect, useState } from "react"
import axios from "axios"

const OrderForm = ({selectedCustomer}) => {
    const [date, setDate] = useState('')
    const [customerID, setCustomerID] = useState('')

    useEffect(()=>{if (selectedCustomer)
        {setCustomerID(selectedCustomer.id)
        console.log(customerID)}
    }, [selectedCustomer])

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(customerID)
        const order_data = {'date': date, 'customer_id': customerID}
        console.log(order_data)
        await axios.post('http://127.0.0.1:5000/orders', order_data)
        
    }
    

    return(
        <form onSubmit={handleSubmit}>
            <h3>Order Form</h3>
            <label>Date</label>
            <input type="date" value = {date} onChange={(e)=>setDate(e.target.value)}></input><br/>
            <p>Customer: {selectedCustomer && selectedCustomer.id}</p> 
            <button type="submit">Submit</button>
        </form>
    )
    
}

export default OrderForm