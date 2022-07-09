import React from 'react';
import { Card } from 'react-bootstrap';
import { AnimationWrapper } from 'react-hover-animation';

const SingleProduct = ({product,myProducts,setMyProducts}) => {
    const { _id,name, img ,seller,ratings,price}=product;
    const handleDelete=(id,name)=>{
        const confirmation=window.confirm(`Do you want to delete this ${name}?`)
      if(confirmation){
        const url=`http://localhost:5000/delete-product?id=${id}`
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.jsn)
        .then(data=>console.log(data))
      
        window.location.reload();

      }
      else{
        alert('aborted')
      }
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
            <button onClick={()=>handleDelete(_id,name)} className='btn btn-light font-weight-bold text-secondary'>Delete product</button>
          </Card.Body>
          </AnimationWrapper>
        </Card>
       
    
      </div>
    );
};

export default SingleProduct;