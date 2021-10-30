import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Order from '../Order/Order';
import './ManageOrders.css';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/allorders')
        .then(res => res.json())
        .then(data => {
            setAllOrders(data);
            console.log(data)
        });
    },[])
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
                    <div className="order-list-container">
                <div className="order-image d-flex align-items-center justify-content-center">
                    <h4 className="brand-color-text">Image</h4>
                </div>
                <div className="order-name d-flex align-items-center justify-content-center">
                    <h4 className="brand-color-text">Package Name</h4>
                </div>
                <div className="order-user d-flex align-items-center justify-content-center"><h4 className="brand-color-text">Order From</h4></div>
                <div className="order-price d-flex align-items-center justify-content-center">
                    <h4 className="brand-color-text">Price</h4>
                </div>
                <div className="update-order d-flex align-items-center justify-content-center"></div>
                <div className="delete-order d-flex align-items-center justify-content-center"></div>
            </div>
                        {
                            allOrders.map(order => <Order order={order} key={order._id}></Order>)
                        }
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default ManageOrders;