import { useState, useEffect } from "react";


const ProductList = ({products, onEdit, onDelete}) => {
    
    const handleDelete = (id) =>
        axios.delete('/products{id}')


    return(
        <div className="products">
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key = {product.id}>
                        ID: {product.id}, Name: {product.name}
                        <button onClick={() => onEdit(product)}>Edit</button>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default ProductList