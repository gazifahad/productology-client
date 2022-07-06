import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { AnimationWrapper } from 'react-hover-animation';

const Product = ({product,setChoosenItems}) => {
    const { _id,name, img ,seller,ratings,price}=product;
    const addToCart=(id)=>{
      setChoosenItems(id);
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
              <button onClick={()=>addToCart(_id)} className='btn btn-light font-weight-bold text-secondary'>Add to cart</button>
            </Card.Body>
            </AnimationWrapper>
          </Card>
         
      
        </div>
    );
};

export default Product;