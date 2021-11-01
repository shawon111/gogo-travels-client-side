import { Rating } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardGroup, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import useOrderStatus from '../../hooks/useOrderStatus';
import './PlaceOrder.css';

const PlaceOrder = () => {
    // using hooks
    const {user} = UseAuth();
    const {orderStatus} = useOrderStatus();
    const { Id } = useParams();

    //using useref hook for input fields
    const orderEmail = useRef();
    const orderUserName = useRef(); 
    const shippingAddress = useRef();
    const shippingPhoneNumber = useRef();
    const orderNote = useRef();

    //handle place order
    const handlePlaceOrder = (e) => {
        const userName = orderUserName.current.value;
        const userEmail = orderEmail.current.value;
        const address = shippingAddress.current.value;
        const phone = shippingPhoneNumber.current.value;
        const note = orderNote.current.value;
        const packageID = Id;
        const status = orderStatus;

        const orderDetail = {userName, userEmail, address, phone, note, packageID, status};

        //sending order detail to server
        fetch('https://my-gogo-travels-site.herokuapp.com/packages/placeorder', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetail)
        }).then(res => res.json())
        .then(data => {
            if(data.insertedId){
                const successMessage = document.getElementsByClassName('order-success-message')[0];
                successMessage.style.display = 'block';
            }
            
        })
        e.preventDefault();
    }

    //load package detail from database
    const [currentPackage, setCurrentPackage] = useState({});
    const {p_name, p_price, p_city, p_description, p_img, p_rating} = currentPackage;
    const url = `https://my-gogo-travels-site.herokuapp.com/packages/package/${Id}`;
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setCurrentPackage(data))
    },[])
    return (
        <div>F
            <section>
                <Container>
                    
                    <div className="package-details">
                    
                        <div className="text-center">
                            <div className="mb-4">
                            <img className="place-order-package-thumb" variant="top" alt="" src={p_img} />
                            </div>
                            <div>
                            <h3 className="fw-bold mb-4">{p_name}</h3>
                            <div className="mb-4">
                                {p_description}...
                            </div>
                            <div className="card-btn-price">
                                
                                <div className="package-price mb-3">
                                    <h5 className="text-center">Price: ${p_price}</h5>
                                </div>
                            </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                            <div className="package-rating me-3">
                                    <Rating readOnly value={p_rating || 5}></Rating>
                                </div>
                            <div className="city ms-3">
                                    <h6 className="text-capitalize">City: {p_city}</h6>
                            </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            {/* place order form section */}
            <section>
            <Container>
                    <h5 className="section-subheading text-center">
                        Chose your favourite destination and place order
                    </h5>
                    <h2 className="section-heading text-center">Place Order</h2>
                    <div className="place-order-form">
                    <Form onSubmit={handlePlaceOrder} className="w-75 mx-auto">
                            <Form.Group as={Row} className="mb-3">
                            <Col sm="10 w-100">
                            <Form.Control ref={orderUserName} type="text" placeholder="Your Name" defaultValue={user.displayName} required/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                            <Col sm="10 w-100">
                            <Form.Control ref={orderEmail} type="email" placeholder="Package Price" defaultValue={user.email} required/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                            <Col sm="10 w-100">
                            <Form.Control ref={shippingAddress} type="text" placeholder="Your Address" required/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                            <Col sm="10 w-100">
                            <Form.Control ref={shippingPhoneNumber} type="tel" placeholder="Your Phone Number" required/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm="10 w-100">
                                    <FloatingLabel controlId="floatingTextarea" label="Order Notes" className="mb-3">
                                    <Form.Control ref={orderNote} as="textarea" style={{height:"100px"}}/>
                                    </FloatingLabel>
                                </Col>
                            </Form.Group>
                            <Button className="btn brand-btn" type="submit">
                                Place Order
                            </Button>
                            <h6 className="order-success-message brand-color-text mt-4" style={{
                                display: 'none'
                            }}>Your order is placed successfully!!</h6>
                        </Form>
                        
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default PlaceOrder;