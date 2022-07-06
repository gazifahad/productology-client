import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import {signOut } from 'firebase/auth';

const Header = () => {
  const [user]=useAuthState(auth);
const logout = () => {
    signOut(auth);
  };
    return (
        <div>
          <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link}  to={'/'}>productology</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Dropdown"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
       {
        user?<Link onClick={logout} to='login' className='btn btn-secondary me-1'>Logout</Link> : <div><Link to='login' className='btn btn-secondary me-1'>Login</Link>
        <Link to='register' className='btn btn-secondary'>Register</Link></div>
       }
      </Container>

    </Navbar>
             
        </div>
    );
};

export default Header;