import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className="footer-contents">
                     <p className="footer-description text-center text-light fw-bold">
                         GoGO travel is one of the best travel agency of this country. Please connected with us by following our social media pages and profiles to get notifications about our latest packages and offers. 
                     </p>
                     <div className="social-icons">
                     <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                     <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                     <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
                     <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                     <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                     <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                     </div>
                </div>
            </Container>
            <div className="footer-bottom">
                <Container>
                    <p className="text-center text-white">&copy; 2020 Copyright: GoGo Travels</p>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;