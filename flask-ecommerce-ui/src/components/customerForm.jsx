import { Component } from "react";

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
        const {name, value} = event.target
        this.setState({[name]: value})
        console.log(name, value)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('New customer: ', this.state)

    }


    render(){
        const {name, email, phone} = this.state

        return (
            <form onSubmit={() => this.handleSubmit()}>
                <label>
                    Name
                    <input type="text" name="name" value={name} onChange={() => this.handleChange()}></input>
                </label>
                <br/>
                <label>
                    Email
                    <input type="text" name="email" value={email} onChange={() => this.handleChange()}></input>
                </label>
                <br/>
                <label>
                    Phone
                    <input type="text" name="phone" value={phone} onChange={() => this.handleChange()}></input>
                </label>
                <br/>
            </form>
        )
    }
}

export default CustomerForm