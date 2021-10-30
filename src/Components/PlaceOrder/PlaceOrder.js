import React from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { Id } = useParams();
    return (
        <div>
            <h3>package Id : {Id}</h3>
        </div>
    );
};

export default PlaceOrder;