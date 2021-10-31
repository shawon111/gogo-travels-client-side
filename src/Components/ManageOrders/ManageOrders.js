import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Order from '../Order/Order';
import './ManageOrders.css';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    //loading all orders
    useEffect(()=> {
        fetch('http://localhost:5000/allorders')
        .then(res => res.json())
        .then(data => {
            setAllOrders(data);
        });
    },[])

     //show no order notification if there is no orders
     if(allOrders.length<1){
        return <section><h2 className="text-center no-order-text">There is no order left</h2></section>
    }
    return (
        <div>
            <section>
                <Container>
                    <h5 className="section-subheading text-center">
                        Manage all the orders from customers 
                    </h5>
                    <h2 className="section-heading text-center">
                        All Orders
                    </h2>
                    <div className="order-list">
                        {
                            allOrders.map(order => <Order allOrders={allOrders} setOrders={setAllOrders} order={order} key={order._id}></Order>)
                        }
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default ManageOrders;