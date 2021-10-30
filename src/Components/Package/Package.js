import { Rating } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = (props) => {
    const {p_name, p_city, p_description, p_img, p_price, p_rating, _id} = props.package;
    const url = `packages/placeorder/${_id}`;
    return (
        <CardGroup>
  <Card>
    <div className="card-thumb">
    <Card.Img className="package-thumb" variant="top" src={p_img} />
    </div>
    <Card.Body>
      <Card.Title className="fw-bold mb-4">{p_name}</Card.Title>
      <Card.Text>
        {p_description.slice(0, 150)}...
      </Card.Text>
      <div className="card-btn-price d-flex align-items-center justify-content-between">
         <div className="card-btn"><Link to={url}><Button className="btn brand-btn">Book Now</Button></Link></div>
         <div className="package-price">
             <h5>Price: {p_price}</h5>
         </div>
      </div>
    </Card.Body>
    <Card.Footer className="d-flex align-items-center justify-content-between">
    <div className="package-rating">
             <Rating readOnly value={p_rating}></Rating>
         </div>
      <div className="city">
            <h6 className="text-capitalize">City: {p_city}</h6>
      </div>
    </Card.Footer>
  </Card>
</CardGroup>
    );
};

export default Package;