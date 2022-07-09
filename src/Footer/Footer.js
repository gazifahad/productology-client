import React from 'react';
import './Footer.css'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
// import logo2 from '../../../images/logo2.png'

const Footer = () => {
    return (
      <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>

        <section className=''>
          <form action=''>
            <div className='row d-flex justify-content-center'>
              <div className='col-auto'>
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Email Adress' className='mb-3' />
              </MDBCol>

              <div className='col-auto'>
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </div>
            </div>
          </form>
        </section>

        <section className='mb-4'>
          <p>
        We are a startup, A new idea where everyone can upload there products and delete it if out of stock, everyone is a buyer here also, All can buy and sell each other's product in a retail price and quantity.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 footer-links'>
              <h5 className='text-uppercase text-start'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                   Blogs
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    History
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Donate
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 footer-links'>
              <h5 className='text-uppercase text-start '>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Career
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Crews
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Feed
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 footer-links'>
              <h5 className='text-uppercase text-start footer-links'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                   productology 
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   e-commerce
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   F-commerce
                  </a>
                </li>
               
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 footer-links'>
              <h5 className='text-uppercase text-start'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Work with us!
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    life at productology
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    future scopes
                  </a>
                </li>
                
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright: 
        <b className='text-white ms-1'>
          Productology
        </b>
      </div>
    </MDBFooter>
    );
};

export default Footer;