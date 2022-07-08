import React, { useState } from 'react';
import './Home.css'

import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
import Cart from '../Cart/Cart';

const Home = ({choosenItems}) => {
  const [totalPrice,setTotalPrice]=useState(0);
//  console.log(choosenItems);

  const [user] = useAuthState(auth);
  let price=0;
  for (let index = 0; index < choosenItems.length; index++) {
     price+=parseFloat(choosenItems[index]?.price);
    
  }
  // console.log(price)

     
 


  
  return (
    <div className='w-100'>
      <section className='border border-2 home-cover text-center'>
       <h2 className='text-secondary mt-5'>Welcome to productology</h2>
       <h4 className='text-secondary'>get your facourite items in one place</h4>
       <Form className="d-flex mx-auto text-box search-input">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 "
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

      </section>
      <section className='home-menu d-flex justify-content-between border border-2'>
        <section className=' d-flex flex-column align-items-center justify-content-center mx-auto mt-5'>
          <div className='bg-secondary'>
            <section className='home-menu-menus '>
            <NavLink className='btn btn-secondary border-0  ' to={'allProduct'}>All products</NavLink>
            {
              user &&
              <NavLink className='btn btn-secondary border-0' to={'myProduct'}>My products</NavLink>

            }
          </section>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </section>

        <section className='home-menu-search border border-1 mt-5 w-25'>
         <h2 className='text-center'>Cart</h2>
         <section className='cart-text ms-2 mt-5 p-3 '>
         <h4>Name: </h4><p>{user?.displayName}</p>
         <p >Email: <small className='ms-2'>{user?.email}</small></p>
         <section>
         <h4>Choosen Items:{choosenItems.length}</h4>
         <ol>
          {
            choosenItems.map(item=><Cart item={item}></Cart>)
          }
         
          </ol>
          <hr />
          <h4 className='mt-2'>total price:{price}</h4>
          <NavLink className='btn btn-secondary border-0' to={'/checkout'}>Checkout</NavLink>
         
         
         </section>
         </section>
        </section>
      </section>
    </div>
  );
};

export default Home;