import React from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../hooks/UseAuth';

const Login = () => {
    const { handleGoogleLogin, user } = UseAuth();

    //redirect after login
    const history = useHistory();
    const location = useLocation();
    const previousLocation = location.state?.from;
    const previousLocationUrl = previousLocation?.pathname;
    const url = previousLocationUrl || "/home";
        if(user?.email){
            history.push(url)
        }
    return (
        <div>
            <section className="login-banner d-flex align-items-center justify-content-center">
                 <Button className="login-google-button fw-bold text-uppercase mb-5" onClick={handleGoogleLogin} variant="primary">Login With Google</Button>
            </section>
            
        </div>
    );
};

export default Login;