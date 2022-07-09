import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SingleProduct from './singleProduct';
import { reload } from 'firebase/auth';

const MyProduct = () => {
    const [user]=useAuthState(auth);
    const [inputvalues, setInputValues] = useState([]);
    const [myProducts,setMyProducts]=useState([])
    const [lgShow, setLgShow] = useState(false);
    const { register, handleSubmit } = useForm(); 
    const onSubmit = data => {
        // console.log(data);
        if(!user){
            alert('please login to add a product')
        }
        else{
            setInputValues(data);
       


        const url = 'https://desolate-dusk-03409.herokuapp.com/add-product';
        fetch(url,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => console.log(data))

            window.location.reload();
        }
           

    }
  useEffect(()=>{
    const getMyProducts=async ()=>{
        if (user.email){
            const url=`https://desolate-dusk-03409.herokuapp.com/my-products?email=${user?.email}`
            await fetch(url)
            .then(res=>res.json())
            .then(data=>setMyProducts(data))
            return;
        }

        getMyProducts();
    }
    getMyProducts();
  },[user?.email])
 
    
   
    return (
        <div className=''>
            <h2 className='text-center'>My products</h2>
            <section className="row">
            {
             myProducts.map(product=><SingleProduct key={product._id} product={product} MyProducts={myProducts} setMyProducts={setMyProducts  }> </SingleProduct>)   
            }
            </section>
            <div className='text-center'>

                        <Button className=' mx-auto text-black' onClick={() => setLgShow(true)}>Add new Product</Button>

                        <Modal
                            size="lg"
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg" className=''>
                                    Add a Product
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    
                                {
                                    user? <input className='text-danger' placeholder='Email' value={user?.email} {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} readOnly />: 
                                <input placeholder='please login'  {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}  />
                                }
                                    <input placeholder='product name' {...register("name", { required: true})} /> 
                                   
                                    <input placeholder='seller brand' {...register("seller", { required: true})} />
                                    <input placeholder='Catagory' {...register("catagory", { required: true})} />
                                   
                                    <input placeholder='Price' type="number" inputmode="numeric" {...register("price", { required: true, min: 1, max: 1000000 })} />
                                    <input placeholder='stock quabtity' type="number" inputmode="numeric" {...register("stock", { required: true, min: 1, max: 1000000 })} />
                                    <input style={{display:'inline-block',width:"50%"}} placeholder='image'  type='url' {...register("img", { required: true})} />
                                    <input type="submit" />
                                </form>
                            </Modal.Body>
                        </Modal>
                    </div>
        </div>
    );
};

export default MyProduct;