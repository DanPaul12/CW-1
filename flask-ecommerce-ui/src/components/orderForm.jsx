import { useState } from "react"

const OrderForm = ({selectedCustomer}) => {
    const [date, setDate] = useState('')
    const [customerID, setCustomerID] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setCustomerID(selectedCustomer.id)
        const customer_data = {'date': date, 'customer_id': customerID}

        
    }
    

    return(
        <form>
            <h3>Order Form</h3>
            <label>Date</label>
            <input type="date" value = {date} onChange={(e)=>setDate(e.target.value)}></input><br/>
            <label>Customer:</label> 
            <p>{selectedCustomer && selectedCustomer.name}</p>
        </form>
    )
    
}

export default OrderForm