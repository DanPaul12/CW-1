import axios from "axios"
import { useState, useEffect } from "react"

import { Form, FormGroup, Modal, Container, Button } from "react-bootstrap"


const CustomerForm2 = ({selectedCustomer, updateCustomer}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [modal, setModal] = useState(false)

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
            setModal(true)
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
            setModal(true)
        }
    }

    const closeModal = () => {
        setModal(false)
    }

    return(
        <Container>
        <Form onSubmit={handleSubmit}>
            <h3>Add Customer</h3>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)} />  
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            </Form.Group>
            <br/>
            <Button type="submit">Submit</Button>
            <br/>
            <br/>
        </Form>

        <Modal show={modal} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Success!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Customer successfully added
            </Modal.Body>
        </Modal>

        </Container>
        
    )
}

export default CustomerForm2