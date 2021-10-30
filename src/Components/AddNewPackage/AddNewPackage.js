import Button from '@restart/ui/esm/Button';
import React, { useRef } from 'react';
import { Col, Container, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';

const AddNewPackage = () => {
    const pName = useRef();
    const pPrice = useRef();
    const pCity = useRef();
    const pRating = useRef();
    const pUrl = useRef();
    const pKey = useRef();
    const pDescription = useRef();
    const handleAddPackageSubmit = (e) => {
        const name = pName.current.value;
        const price = parseInt(pPrice.current.value);
        const city = pCity.current.value;
        const rating = parseInt(pRating.current.value);
        const imgUrl = pUrl.current.value;
        const key = pKey.current.value;
        const description = pDescription.current.value;
        const newPackage = {p_name: name, p_price:price, p_city: city, p_rating: rating, p_img: imgUrl, p_key: key, p_description: description};

        fetch('http://localhost:5000/packages/addpackage', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert("package added successfully")
            }
            e.target.reset();
        })
        ;

        e.preventDefault();
    }
    return (
        <div>
            <section>
                <Container>
                    <h5 className="section-subheading text-center">Add new tour destinations for travelers</h5>
                    <h2 className="section-heading text-center">Add New Tour Package</h2>
                    <div className="add-package-form">
                        <Form onSubmit={handleAddPackageSubmit} className="w-75 mx-auto">
                            <Form.Group as={Row} className="mb-3">
                            <Col sm="10 w-100">
                            <Form.Control ref={pName} type="text" placeholder="Package Name" required/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                            <Col sm="10 w-100">
                            <Form.Control ref={pPrice} type="text" placeholder="Package Price" required/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                            <Col sm="10 w-100">
                            <Form.Control ref={pCity} type="text" placeholder="Destination City" required/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                            <Col sm="10 w-100">
                            <Form.Control ref={pRating} type="text" placeholder="Package Rating" required/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                            <Col sm="10 w-100">
                            <Form.Control ref={pUrl} type="text" placeholder="Package Image URL" required/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                            <Col sm="10 w-100">
                            <Form.Control ref={pKey} type="text" placeholder="Package Key" required/>
                            </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3">
                                <Col sm="10 w-100">
                                    <FloatingLabel controlId="floatingTextarea" label="Package Details" className="mb-3">
                                    <Form.Control ref={pDescription} as="textarea" style={{height:"100px"}} required/>
                                    </FloatingLabel>
                                </Col>
                            </Form.Group>
                            <Button className="btn brand-btn" type="submit">
                                Add Package
                            </Button>
                        </Form>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default AddNewPackage;