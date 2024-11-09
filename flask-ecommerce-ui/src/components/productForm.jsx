import { useRef, useState, useEffect } from "react";
import axios from "axios";

const ProductForm = (selectedProduct, onUpdate) => { 
    const [name, setName] = useState('') 
    const [price, setPrice] = useState('')  
    const selectedProductExists = selectedProduct.selectedProduct
    
    useEffect(()=>{
        if (selectedProductExists){
        setName(selectedProduct.selectedProduct.name)
        setPrice(selectedProduct.selectedProduct.price)}
    },[selectedProduct])
    


    const handleSubmit = async (event) => {
        event.preventDefault()
        const productData = {"name": name, "price": price}                     //whats happening here
        console.log("name:", {name}, "price:", {price})

        try{
            // update 
           if (selectedProductExists){
                const update_response = await axios.put(`http://127.0.0.1:5000/products/${selectedProduct.selectedProduct.id}`, productData)
                console.log(update_response)
            } 
            // create
            else {
                const response2 = await axios.post('http://127.0.0.1:5000/products', productData)
                console.log(response2)
                //setName(response.name)
                //setPrice(response.price)
            }
            setName('')
            setPrice('')
        }catch (error){
            console.error('Error:', error)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Product Form</h3>
            <label>
                Name
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
            </label>
            <br />
            <label>
                Price
                <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)}></input>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ProductForm 