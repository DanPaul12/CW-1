import { useState, useEffect } from "react";


const ProductList = ({products}) => {
    

    return(
        <div className="products">
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key = {product.id}>
                        ID: {product.id}, Name: {product.name}
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default ProductList