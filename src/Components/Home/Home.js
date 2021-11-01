import React, { useEffect, useState } from 'react';
import './Home.css';
import { Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faSmile, faSun } from '@fortawesome/free-regular-svg-icons';
import Package from '../Package/Package';
import Button from '@restart/ui/esm/Button';

const Home = () => {
    const [packages, setPackages] = useState([]);
    useEffect(()=>{
        fetch('https://my-gogo-travels-site.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => {
            setPackages(data)
        })
    },[])
    return (
        <div>
            {/* homepage banner section */}
            <section className="home-banner">
                <Container>
                    <div className="home-contents">
                        <h5 className="banner-subheading text-white mb-3">Make your tours awesome</h5>
                        <h1 className="banner-heading text-white">You have a destination,<br/>
                            We have a place</h1>
                    </div>
                </Container>
            </section>
            {/* homepage agency statistics info section */}
            <div className="statistics">
                <Container>
                    <div className="statistics-items-container d-flex align-items-center">
                        <div className="statistics-item">
                            <div className="statistics-icon">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className="statistics-texts">
                                <h5 className="statistics-heading">1,000+ Local Tours</h5>
                                <p className="statistics-detail">Successfully completed 1000+ local tours</p>
                            </div>
                        </div>
                        <div className="statistics-item">
                            <div className="statistics-icon">
                            <FontAwesomeIcon icon={faSun} />
                            </div>
                            <div className="statistics-texts">
                                <h5 className="statistics-heading">Winter Destinations</h5>
                                <p className="statistics-detail">Multiple winter tour destinations</p>
                            </div>
                        </div>
                        <div className="statistics-item">
                            <div className="statistics-icon">
                            <FontAwesomeIcon icon={faSmile} />
                            </div>
                            <div className="statistics-texts">
                                <h5 className="statistics-heading">98% Happy Travelers</h5>
                                <p className="statistics-detail">98% satisfied and happy travellers</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* homepage packages section */}
            <section className="packages-section">
                <Container>
                    <h5 className="section-subheading text-center">Popular Travel Packages</h5>
                    <h2 className="section-heading text-center">Top Places for Travel</h2>
                    <div className="packages-container">
                        {
                            packages.map(singlePackage => <Package key={singlePackage._id} package={singlePackage}></Package>)
                        }
                    </div>
                </Container>
            </section>
            {/* trending event section */}
            <section className="trendings">
                <h5 className="section-subheading text-center">Trending Event of the Week</h5>
                <h2 className="section-heading text-center">Trending Event</h2>
                <div className="trending-events">
                    <Container>
                    <div className="trending-items-container d-flex align-items-center justify-content-between">
                        
                        <div className="trending-item d-flex align-tems-stretch">
                            <div className="trending-icon">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className="trending-texts ms-4">
                                <h2 className="trending-heading fs-1 text-white lh-1">584</h2>
                                <p className="trending-detail fs-6 text-white">Top Local Guides</p>
                            </div>
                        </div>
                        <div className="trending-item d-flex align-tems-stretch">
                            <div className="trending-icon">
                            <FontAwesomeIcon icon={faSun} />
                            </div>
                            <div className="trending-texts ms-4">
                                <h2 className="trending-heading fs-1 text-white lh-1">7,410</h2>
                                <p className="trending-detail fs-6 text-white">Winter Destinations</p>
                            </div>
                        </div>
                        <div className="trending-item d-flex align-tems-stretch">
                            <div className="trending-icon">
                            <FontAwesomeIcon icon={faChartLine} />
                            </div>
                            <div className="trending-texts ms-4">
                                <h2 className="trending-heading fs-1 text-white lh-1">680</h2>
                                <p className="trending-detail fs-6 text-white">New Tours</p>
                            </div>
                        </div>
                        <div className="trending-item d-flex align-tems-stretch">
                            <div className="trending-icon">
                            <FontAwesomeIcon icon={faSmile} />
                            </div>
                            <div className="trending-texts ms-4">
                                <h2 className="trending-heading fs-1 text-white lh-1">2,540</h2>
                                <p className="trending-detail fs-6 text-white">Happy Travelers</p>
                            </div>
                        </div>
                    </div>
                    </Container>
                </div>
            </section>
            {/* newsletter section */}
            <section>
                <Container>
                <h5 className="section-subheading text-center">Subscribe to get latest news from us</h5>
                <h2 className="section-heading text-center">Subscribe To Our Newsletter</h2>
                    <Form className="px-5 text-center">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="email" placeholder="Your Email" />
                        </Form.Group>
                        <Button className="btn brand-btn" type="submit">
                            Subscribe
                        </Button>
                    </Form>
                </Container>
            </section>
        </div>
    );
};

export default Home;