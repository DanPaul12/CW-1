import { Component, useState, useEffect } from 'react'
import ProductList from './components/productList'
import ProductForm from './components/productForm'
import CustomerList2 from './components/customerList2'
import CustomerForm2 from './components/customerForm2'
import OrderForm from './components/orderForm'
import NavBar from './components/NavigationBar'
import Home from './components/home'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

const App = () => {
  const [products, setProducts] = useState([])
  const [customers, setCustomers] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedCustomer, setSelectedCustomer] = useState(null)
  const [selectedOrderCustomer, setSelectedOrderCustomer] = useState(null)

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

    const handleEditProduct = (product) => {
      setSelectedProduct(product)
    }

    const handleEditCustomer = (customer) => {
      setSelectedCustomer(customer)
      console.log(customer)
    }

    const handlePlaceOrderCustomer = (customer) => {
      setSelectedOrderCustomer(customer)
      console.log(customer)
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

    const handleCustomerUpdate =  () => {
      fetchCustomers()
    }
      
      return (
            <div id='container'>
              <NavBar/>
              <Routes>
              <Route path='/' element =
              {<Home/>}/>
              <Route path='/customers' element=
              {<div>
              <CustomerForm2
                updateCustomer = {handleCustomerUpdate}
                selectedCustomer={selectedCustomer}/>
                
              
              <CustomerList2 
                customers = {customers}
                onEdit = {handleEditCustomer} 
                onPlaceOrder = {handlePlaceOrderCustomer} />
                </div>}
                />
              <Route path='/products' element= 
              {
              <div>
              <ProductForm 
                selectedProduct = {selectedProduct}
                onUpdate = {handleUpdateProduct}/>
                
              <ProductList 
                products = {products}
                onEdit = {handleEditProduct}
                onDelete={handleDeleteProduct}/>
              </div>}
                />
              <Route path='/orders' element=
              {<OrderForm
                selectedCustomer={selectedOrderCustomer}/>}
                />
                </Routes>

            </div>

        )
  }


export default App
