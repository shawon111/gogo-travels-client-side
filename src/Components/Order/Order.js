import React, { useEffect, useState } from 'react';
import './Order.css';

const Order = (props, setOrderStatus) => {
    const {userName, packageID, _id, status} = props.order;
    const [singleOrder, setSingleOrder] = useState({});
    //loading orders
    const url = `https://my-gogo-travels-site.herokuapp.com/packages/package/${packageID}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleOrder(data))
    },[]);
    const {p_img, p_name, p_price} = singleOrder;

    //deleting order
    const handleCancelPackage = (id) => {
        if(window.confirm("Are you sure want to cancel this order?")){
            const url = `https://my-gogo-travels-site.herokuapp.com/packages/package/${id}`;
            fetch(url, {
                method: 'delete'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Order cancelled successfully!!');
                    window.location.reload();
                }
            })
        }else{
            alert('Order not cancelled')
        }
    }

    //updating order status

    const ManageUpdateStatus = e => {
        singleOrder.status = true;
        const url = `https://my-gogo-travels-site.herokuapp.com/packages/package/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singleOrder)
        }).then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                alert('Order is approved!!')
            }
            window.location.reload();
        })
    }

    let showStatus;
    if(status){
        showStatus = "Approved";
    }else{
        showStatus = "Pending";
    }
    

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
                    <h5>${p_price}</h5>
                </div>
                <div className="order-status d-flex align-items-center justify-content-center"><button onClick={ManageUpdateStatus} className="btn btn-warning text-white text-capitalize">{showStatus}</button></div>
                <div className="delete-order d-flex align-items-center justify-content-center"><button onClick={()=> handleCancelPackage(_id)} className="btn brand-btn">Cancel</button></div>
            </div>
        </div>
    );
};

export default Order;