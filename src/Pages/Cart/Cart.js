import React, { useEffect, useState } from 'react';

const Cart = ({item}) => {

    const {name,img,price}=item;
    
    

        // const priceN=parseInt(item.price);
        // setTotalPrice(totalPrice+priceN);
        // console.log(totalPrice);
      
   
    
    // 
     
    return (
        <div>
            
          <li>
            item name : {name}
            <br />
            price: {price}
          </li>
        
        </div>
    );
};

export default Cart;