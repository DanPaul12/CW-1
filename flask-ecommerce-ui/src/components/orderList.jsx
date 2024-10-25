import { useEffect, useState } from "react"


const OrderList = ({customerid}) => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if (customerid) {
            const fetchedOrders= [
                {id: 101, date : '10/27'},
                {id: 102, date : '10/28'},
            ]
        setOrders(fetchedOrders)
        }
    }, [customerid])


        return(
            <div className="orders">
                <h3>Orders</h3>
                <ul>
                    {orders.map(order => (
                    <li key={order.id}> 
                    ID: {order.id} Date: {order.date}</li>))}
                </ul>
                {console.log(orders)}
            </div>
        )
    }

export default OrderList
