import { useState, useEffect } from "react";
import axios from "axios";
                          //when are curly braces needed

const ProductList = ({products, onEdit, onDelete}) => {
    
  


    return(
        <div className="products">
            <h3>Products</h3>
            <ul>
                {products.map(product => (
                    <li key = {product.id}>
                        ID: {product.id}, Name: {product.name}
                        <button onClick={() => onEdit(product)}>Edit</button>
                        <button onClick={() => onDelete(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default ProductList