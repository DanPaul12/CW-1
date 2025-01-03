import { Component } from "react"
import axios from 'axios'

class CustomerForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            email: '',
            phone: ''
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;  //what exactly is happening here
        this.setState({[name]: value})
        console.log(name, value)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('New customer: ', this.state)

        const customerData = {
            name : this.state.name.trim(),
            email : this.state.email.trim(),
            phone : this.state.phone.trim()
        }
        
        axios.post('http://127.0.0.1:5000/customers', customerData)
            .then(response => {
                console.log('Customer Saved Successfully', response.data)
            })
            .catch(error => {
                console.error('Error submitting', error)
            })
        
    }

    render(){
        const {name, email, phone} = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Customer Form</h3>
                <label>
                    Name
                    <input type="text" name="name" value={name} onChange={this.handleChange}></input>
                </label>
                <br/>
                <label>
                    Email
                    <input type="text" name="email" value={email} onChange={this.handleChange}></input>
                </label>
                <br/>
                <label> 
                    Phone  
                    <input type="text" name="phone" value={phone} onChange={this.handleChange}></input>
                </label>                                      
                <br/>
                <button type="submit">Submit</button>
            </form>
        ) //why dont these ones need parentheses and arrows?)
    }
}

export default CustomerForm