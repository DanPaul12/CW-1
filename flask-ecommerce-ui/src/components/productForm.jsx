import { useRef, useState, useEffect } from "react";

const ProductForm = (selectedProduct, onUpdate) => { 
    const [name, setName] = useState('') 
    const [price, setPrice] = useState('')  
    
    useEffect(()=>{
        if (selectedProduct){
        setName(selectedProduct.name)
        setPrice(selectedProduct.price)}
    },[selectedProduct])
    


    const handleSubmit = async (event) => {
        event.preventDefault()
        const productData = {name, price}                     //whats happening here
        console.log("name:", {name}, "price:", {price})
        try{
            if (selectedProduct){
                await axios.put(`http://127.0.0.1:5000/products${selectedProduct.id}`, productData)
            } else {
                await axios.post('http://127.0.0.1:5000/products', productData)
            }
            setName('')
            setPrice('')
        }catch (error){
            console.error('Error:', error)
        }
    }

    return(
        <form onSubmit={() => handleSubmit}>
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