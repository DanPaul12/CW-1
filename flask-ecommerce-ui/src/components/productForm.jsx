import { useRef } from "react";

const ProductForm = () => {        //whats deal with semicolons and inputting prop types?
    const nameRef = useRef(null)   //what exactly does {} represent in jsx
    const priceRef = useRef(null)


    const handleSubmit = (event) => {
        event.preventDefault()
        const name = nameRef.current.value 
        const price = priceRef.current.value 
        console.log("name:", {name}, "price:", {price})
    }

    return(
        <form onSubmit={handleSubmit()}>
            <label>
                Name
                <input type="text" ref={nameRef}></input>
            </label>
            <label>
                Price
                <input type="text" ref={nameRef}></input>
            </label>
        </form>
    )
}

export default ProductForm 