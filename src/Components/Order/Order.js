import React, { useEffect, useState } from 'react';
import './Order.css';

const Order = (props) => {
    const {userName, packageID} = props.order;
    const [singleOrder, setSingleOrder] = useState({});
    const url = `http://localhost:5000/packages/package/${packageID}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleOrder(data))
    },[]);
    const {p_img, p_name, p_price} = singleOrder;
    return (
        <div>
            <div className="single-order-container">
                <div className="order-image">
                    <img className="img-fluid" src={p_img} alt="" />
                </div>
                <div className="order-name d-flex align-items-center justify-content-center">
                    <h5>{p_name}</h5>
                </div>
                <div className="order-user d-flex align-items-center justify-content-center"><h5>{userName}</h5></div>
                <div className="order-price d-flex align-items-center justify-content-center">
                    <h5>{p_price}</h5>
                </div>
                <div className="update-order d-flex align-items-center justify-content-center"><button className="btn btn-primary">Update</button></div>
                <div className="delete-order d-flex align-items-center justify-content-center"><button className="btn brand-btn">Delete</button></div>
            </div>
        </div>
    );
};

export default Order;