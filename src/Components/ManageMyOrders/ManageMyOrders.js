import React, { useEffect, useState } from 'react';
import useOrderStatus from '../../hooks/useOrderStatus';

const ManageMyOrders = (props) => {
    const {userName, packageID, _id, status} = props.order;
    const [singleOrder, setSingleOrder] = useState({});
    const url = `http://localhost:5000/packages/package/${packageID}`;
    //loading my orders
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleOrder(data))
    },[]);
    const {p_img, p_name, p_price} = singleOrder;
     //deleting order
     const handleCancelPackage = (id) => {
        if(window.confirm("Are you sure want to cancel this order?")){
            const url = `http://localhost:5000/packages/package/${id}`;
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
                <div className="order-status d-flex align-items-center justify-content-center"><span className="p-2 btn-warning text-white text-capitalize">{showStatus}</span></div>
                <div className="delete-order d-flex align-items-center justify-content-center"><button onClick={()=> handleCancelPackage(_id)} className="btn brand-btn">Cancel</button></div>
            </div>
        </div>
    );
};

export default ManageMyOrders;