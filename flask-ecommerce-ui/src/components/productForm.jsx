import { useRef, useState, useEffect } from "react";
import axios from "axios";
import {array, func} from 'prop-types'
import { Form, FormGroup, Modal, Button } from "react-bootstrap"

const ProductForm = ({selectedProduct, onUpdate}) => { 
    const [name, setName] = useState('') 
    const [price, setPrice] = useState('')  
    
    useEffect(()=>{
        if (selectedProduct){
        setName(selectedProduct.name)
        setPrice(selectedProduct.price)}
    },[selectedProduct])
    


    const handleSubmit = async (event) => {
        event.preventDefault()
        const productData = {"name": name, "price": price}                     //whats happening here
        console.log("name:", {name}, "price:", {price})

        try{
            // update 
           if (selectedProduct){
                const update_response = await axios.put(`http://127.0.0.1:5000/products/${selectedProduct.id}`, productData)
                console.log(update_response)
            } 
            // create
            else {
                const response2 = await axios.post('http://127.0.0.1:5000/products', productData)
                console.log(response2)
                //setName(response.name)
                //setPrice(response.price)
            }
            onUpdate()
            setName('')
            setPrice('')
        }catch (error){
            console.error('Error:', error)
        }
    }

    return(
        <Form onSubmit={handleSubmit}>
            <h3>Product Form</h3>
            <Form.Group>
                <Form.Label> Name </Form.Label>
                <Form.Control type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.Label> Price </Form.Label>
                <Form.Control type="text" value={name} onChange={(e)=> setPrice(e.target.value)}/>
            </Form.Group>
            <br/>
            <Button type="submit">Submit</Button>
            <br/>
            <br/>
        </Form>
    )
}

ProductForm.propTypes = {
    onUpdate : func
}

export default ProductForm 