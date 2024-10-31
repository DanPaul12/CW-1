import { Component, useState, useEffect } from 'react'
import CustomerList from './components/customerList'
import OrderList from './components/orderList'
import ProductList from './components/productList'
import CustomerForm from './components/customerForm'
import ProductForm from './components/productForm'
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState([])

    useEffect(() => {
        fetchProducts()
        }, [])
  
    const fetchProducts = async () => {
      try{
        const response = await axios.get('http://127.0.0.1:5000/products')
        setProducts(response.data)}
      catch (error){
        console.error(error)
      }
    }

    const handleEditProduct = (product) => {
      setSelectedProduct(product)
    }

    const handleDeleteProduct = () => {
      fetchProducts()
      setSelectedProduct(null)
    }

    const handleUpdateProduct = () => {
      fetchProducts()
    }
      
      return (
            <div id='container'>
              <ProductForm 
                selectedProduct = {selectedProduct}
                onUpdate = {handleUpdateProduct}/>
              <ProductList 
                products = {products}
                onEdit = {handleEditProduct}
                onDelete={handleDeleteProduct}/>
            </div>

        )
  }


export default App
