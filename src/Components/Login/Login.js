
import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { handleGoogleLogin } = useFirebase();
    return (
        <div>
            <Button onClick={handleGoogleLogin} variant="primary">Login With Google</Button>
        </div>
    );
};

export default Login;