import React, { useState } from 'react';
import './Home.css'

import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import Footer from '../../Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBIcon } from 'mdb-react-ui-kit';
import Loading from '../Loading/Loading';

const Home =({choosenItems}) => {



  const [user] = useAuthState(auth);
  let price=0;
  for (let index = 0; index < choosenItems.length; index++) {
     price+=parseFloat(choosenItems[index]?.price);
    
  }
  // console.log(price)

     
 

  
  return (
    <div className='w-100'>
      <div className='home-cover'>
      <section className='border-2  text-center home-up-content'>
       <h2 className='text-secondary mt-5'>Welcome to <span className='text-warning'>Productology</span></h2>
       <h6 className='text-secondary'>get your facourite items in one place</h6>
       <Form className="d-flex mx-auto text-box search-input">
              <Form.Control
                type="search"
                placeholder="Search"
                className=" "
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

      </section>
      </div>
      <section className='home-menu d-flex justify-content-between border-2 '>
        <section className='home-product-section d-flex flex-column align-items-center justify-content-center mx-auto mt-5'>
          <div className='bg-light d-flex justify-content-center align-items-center h-20 w-100 rounded'>
            <section className='home-menu-menus bg-dark'>
            <NavLink className='btn btn-secondary border-0  ' to={'allProduct'}>All products</NavLink>
           
              <NavLink className='btn btn-secondary  border-left border-top-0 border-end-0 border-bottom-0 border-warning' to={'myProduct'}>My products</NavLink>

           
          </section>
          </div>
          <div>
           
            <Outlet></Outlet>
          </div>
        </section>

        <section className='home-menu-cart border border-1  w-25'>
         
         <section className='cart-text ms-1  p-2 '>
         <h2 className='text-center'>Cart <i className="fa-solid fa-cart-arrow-down"></i> </h2>
         <h4 className='mt-4'>Name: {user?.displayName ? user?.displayName : 'mr. X'}</h4>
         <b>email: </b><small className='ms-1'>{user?.email}</small>
         <section >
         <b className='me-1'>Choosen Items: </b>{choosenItems.length}
         <ol>
          {
            choosenItems.map(item=><Cart key={item._id} item={item}></Cart>)
          }
         
          </ol>
          <hr />
          <h4 className='mt-2'>total price:{price}</h4>
          <NavLink className='btn btn-secondary border-0' to={'/checkout'}>Checkout</NavLink>
         
         
         </section>
         </section>
        </section>
      </section>
      <section className='footer'>
        <Footer></Footer>

      </section>
    </div>
  );
};

export default Home;