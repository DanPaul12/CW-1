import { Component, useState } from 'react'
import CustomerList from './components/customerList'
import OrderList from './components/orderList'
import ProductList from './components/productList'
import CustomerForm from './components/customerForm'
import ProductForm from './components/productForm'


const App = () => {
  const [products, setProducts] = useState([])

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
      
      return (
            <div id='container'>
              <ProductForm />
              <ProductList products = {products}/>
            </div>

        )
  }


export default App
