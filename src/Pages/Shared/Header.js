import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import {signOut } from 'firebase/auth';
import logo from '../../images/logo.png'


const Header = () => {
  const [user]=useAuthState(auth);
const logout = () => {
    signOut(auth);
  };
    return (
        <div>
          <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <nav className='d-flex align-items-center'>
        <img style={{width:"25px", height:"25px"  }} src={logo} alt='logo'></img> 
        <Navbar.Brand className='' as={Link}  to={'/'}>productology</Navbar.Brand>
       <Navbar>
       <Link className='mx-1' to={'/'}> <button className='btn btn-secondary'>Home</button></Link>
       </Navbar>
       </nav>
      
       
        
      
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