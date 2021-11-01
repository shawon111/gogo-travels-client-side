import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import UseAuth from '../../hooks/UseAuth';
import ManageMyOrders from '../ManageMyOrders/ManageMyOrders';
import Order from '../Order/Order';

const MyOrders = () => {
    const {user} = UseAuth();
    const [myOrders, setMyOrders] = useState([]);

    //loading my orders
    useEffect(()=> {
        fetch('https://my-gogo-travels-site.herokuapp.com/allorders')
        .then(res => res.json())
        .then(data => {
            const myAllOrders = [];
            for(const myOrder of data){
                if(myOrder.userEmail === user.email){
                    myAllOrders.push(myOrder);
                }
            }
            setMyOrders(myAllOrders);
        });
    },[])

    //show no order notification if there is no orders
    if(myOrders.length<1){
        return <section><h2 className="text-center no-order-text">You don't have any order</h2></section>
    }
    return (
        <div>
            <section>
                <Container>
                    
                    <h5 className="section-subheading text-center">Manage your orders, track your orders</h5>
                    <h2 className="section-heading text-center">My Orders</h2>
                    <div className="my-orders">
                        {
                            myOrders.map(order => <ManageMyOrders key={order._id} order={order}></ManageMyOrders>)
                        }
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default MyOrders;