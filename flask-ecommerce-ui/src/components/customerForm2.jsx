import axios from "axios"
import { useState } from "react"


const CustomerForm2 = (selectedCustomer) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [selectCustomer, setSelectedCustomer] = useState(null)

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
                await axios.put(`http://127.0.0.1:5000/customers/${selectCustomer.id}`, customer_data)
            }catch (error){
                console.error(error)
            }
        }else{
            try{
               await axios.post('http://127.0.0.1:5000/customers', customer_data)
            }catch (error){
                console.error(error)
            }
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <label>Email</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <label>Phone</label>
            <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CustomerForm2