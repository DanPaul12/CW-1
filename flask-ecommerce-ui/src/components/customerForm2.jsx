import axios from "axios"
import { useState, useEffect } from "react"


const CustomerForm2 = ({selectedCustomer, updateCustomer}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(()=>{
        if (selectedCustomer){
            setName(selectedCustomer.name)
            setEmail(selectedCustomer.email)
            setPhone(selectedCustomer.phone)
        }
    }, [selectedCustomer])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const customer_data = {'name': name, 'email': email, 'phone': phone}

        if (selectedCustomer) {
            try{
                await axios.put(`http://127.0.0.1:5000/customers/${selectedCustomer.id}`, customer_data)
            }catch (error){
                console.error(error)
            }
            updateCustomer()
            setName('')
            setEmail('')
            setPhone('')
        }else{
            try{
               await axios.post('http://127.0.0.1:5000/customers', customer_data)
            }catch (error){
                console.error(error)
            }
            updateCustomer()
            setName('')
            setEmail('')
            setPhone('')
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Add Customer</h3>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
            <label>Email</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
            <label>Phone</label>
            <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}></input><br/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CustomerForm2