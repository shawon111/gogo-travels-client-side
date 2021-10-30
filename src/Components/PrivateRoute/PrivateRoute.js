import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../hooks/UseAuth';
import './PrivateRoute.css';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = UseAuth();
    if(isLoading){
        return  <div className="d-flex align-items-center justify-content-center"><Spinner className="page-load-spinner" animation="border" variant="danger" /></div>;
    }
    return (
        <Route 
        {...rest}
        render={({location}) => user.email ? (
                    children
                ) :
                <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }
                }
                ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;