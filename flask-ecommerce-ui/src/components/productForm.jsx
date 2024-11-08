import { useRef } from "react";

const ProductForm = (selectedProduct) => {        //whats deal with semicolons and inputting prop types?
    const nameRef = useRef(null)                  //what exactly does {} represent in jsx
    const priceRef = useRef(null)


    const handleSubmit = (event) => {
        event.preventDefault()
        const name = nameRef.current.value 
        const price = priceRef.current.value 
        console.log("name:", {name}, "price:", {price})
        if (selectedProduct){
            const editProduct = async () => 
                axios.put('/products{}')
        } else {
            axios.post('/products')
        }
    }

    return(
        <form onSubmit={() => handleSubmit}>
            <h3>Product Form</h3>
            <label>
                Name
                <input type="text" ref={nameRef}></input>
            </label>
            <br />
            <label>
                Price
                <input type="text" ref={priceRef}></input>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default ProductForm 