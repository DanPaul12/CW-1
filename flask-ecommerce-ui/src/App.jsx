import { Component, useState, useEffect } from 'react'
import CustomerList from './components/customerList'
import OrderList from './components/orderList'
import ProductList from './components/productList'
import CustomerForm from './components/customerForm'
import ProductForm from './components/productForm'
import CustomerList2 from './components/customerList2'
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([])
  const [customers, setCustomers] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

    useEffect(() => {
        fetchProducts()
        }, [])

    useEffect(()=>{
      fetchCustomers()
    }, [])
  
    const fetchProducts = async () => {
      try{
        const response = await axios.get('http://127.0.0.1:5000/products')
        //console.log(response)
        //console.log(response.data)
        setProducts(response.data)}
      catch (error){
        console.error(error)
      }
    }

    const fetchCustomers = async () => {
      try{
        const response = await axios.get('http://127.0.0.1:5000/customers')
        setCustomers(response.data)
      }catch (error){
        console.error(error)
      }
    }

    const handleEditCustomer = (id) => {
      axios.put(`http://127.0.0.1:5000/customers/${id}`)
    }

    const handleEditProduct = (product) => {
      setSelectedProduct(product)
    }

    const handleDeleteProduct = (id) => {
      axios.delete(`http://127.0.0.1:5000/products/${id}`)
      fetchProducts()
      setSelectedProduct(null)
    }

    const handleUpdateProduct =  () => {
      fetchProducts()
      setSelectedProduct(null)
    }
      
      return (
            <div id='container'>
              <CustomerForm/>
              <CustomerList2 
                customers = {customers}/>
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
