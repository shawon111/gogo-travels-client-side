import React from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const Header = () => {
    const activeLink = {
        color: 'var(----brand-color)',
        fontWeight: '600'
    }
    const { user, handleLogout } = UseAuth();
    return (
        <header className="py-2">
            <Navbar expand="lg" variant="dark">
              <Container>
              <div className="d-flex w-100 justify-content-between">
              <h2 className="text-white w-25 text-uppercase"><span className="brand-color-text">GoGo</span> Travels</h2>
              
              <Navbar.Collapse id="basic-navbar-nav" className="w-75">
                <Nav className="text-white header-nav d-flex justify-content-end w-100">
                  <NavLink activeStyle={activeLink} to="/home">Home</NavLink>
                  <NavLink activeStyle={activeLink} to="/manageorders">Manage Orders</NavLink>
                  <NavLink activeStyle={activeLink} to="/myorders">My Orders</NavLink>
                  <NavLink activeStyle={activeLink} to="/addpackage">Add Package</NavLink>
                  {
                      user.email ? <button className="btn text-white btn-danger" onClick={handleLogout}>LogOut</button>
                        :
                      <NavLink to="/login">Login</NavLink>
                  }
                </Nav>
              </Navbar.Collapse>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </div>
              </Container>
            </Navbar>
        </header>
    );
};

export default Header;