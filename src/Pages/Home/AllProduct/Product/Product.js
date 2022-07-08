import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

import { AnimationWrapper } from 'react-hover-animation';

const Product = ({product,choosenItems,setChoosenItems}) => {
 
    const { _id,name, img ,seller,ratings,price}=product;
    const addToCart=async(product)=>{
      // console.log(choosenItems);
      
      //  console.log(id);

    
      await setChoosenItems([...choosenItems,product]);
      
      
      // const priceN=parseInt(product.price);
      //  setTotalPrice(parseInt(product.price)+totalPrice);
      
      // console.log(totalPrice);
     
      
    }
    
  
    
    return (
        <div className="col col-sm-12 col-md-6 col-lg-4 mt-5">
             
             
        
          <Card className='mb-2 rounded text-white bg-secondary'>
          <AnimationWrapper>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
               seller:{seller}
              </Card.Text>
              <Card.Text>
               rating: {ratings}
              </Card.Text>
              <Card.Text>
               Price: {price}
              </Card.Text>
              <button onClick={()=>addToCart(product)} className='btn btn-light font-weight-bold text-secondary'>Add to cart</button>
            </Card.Body>
            </AnimationWrapper>
          </Card>
         
      
        </div>
    );
};

export default Product;