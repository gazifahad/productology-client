import React, { useState,useEffect } from 'react';
import Product from './Product/Product';
import './AllProduct.css'
const AllProduct = ({choosenItems,setChoosenItems}) => {
    // console.log(choosenItems);
    const [cartItems,setCartItems]=useState([]);
    const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
    const [products, setProducts] = useState([]);
    // const setItem=async()=>{
    //     const cartItem= await products.find(product=>product._id===choosenItems);
    //     setCartItems(cartItem);
    // }
    // setItem();
    // console.log(cartItems);
   
//    setCartItems(newCartItems);
   
   useEffect(()=>{
    const url=`https://desolate-dusk-03409.herokuapp.com/allProduct?page=${page}&size=${pageSize}`
    fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data));

       
   },[page,pageSize])
   useEffect(() => {
           
    fetch('https://desolate-dusk-03409.herokuapp.com/entityCount')
        .then(res => res.json())
        .then(data => {
            const count = data.count;
            const pages = Math.ceil(count / 9)
            setPageCount(pages);
        })
}, [])
          
// console.log(page,pageSize);
// console.log(choosenItems);

    return (
        <div >
             <div className="container">
            <h4 className='text-center mt-2 text-secondary'>{products.length} products available in this page</h4>
            <div className="row">
        
            {
                products.map(product => <Product choosenItems={choosenItems} setChoosenItems={setChoosenItems} key={product._id} product={product}></Product>)
            }
          
          </div>
          </div>
           
            {/* pagination */}
            <section className='border border-1 w-100 pagination d-flex justify-content-center mt-3' >
                {
                    [...Array(pageCount).keys()].map(number => <button
                        className={page === number + 1 ? 'selected page-item w-7' : 'page-item text-center w-7'} onClick={() => setPage(number + 1)} key={number}>{number + 1} </button>)
                }
                <b>page size: </b>
                <select onChange={(e) => setPageSize(e.target.value)} name='' id=''>

                    <option value="6">6</option>
                    <option value="9" selected>9</option>
                    <option value="15">15</option>
                    <option value="18">18</option>
                </select>
            </section>
        </div>
    );
};

export default AllProduct;