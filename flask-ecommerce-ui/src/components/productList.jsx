import { useState, useEffect } from "react";
import axios from "axios";


const ProductList = ({products, onEdit, onDelete}) => {
    
    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:5000/products/${id}`)
        onDelete()
    }


    return(
        <div className="products">
            <h3>Products</h3>
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