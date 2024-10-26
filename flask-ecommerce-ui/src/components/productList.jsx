import { useState, useEffect } from "react";


const ProductList = ({orderID}) => {
    const [products, setProducts] =useState([])

    useEffect(() => {
        if (orderID) {
            const fetchedProducts = [
                {id: "a1", name: "cookies"},
                {id: "b2", name: "bookies"}
            ]
            setProducts(fetchedProducts)
        }
    }, [orderID]
)

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