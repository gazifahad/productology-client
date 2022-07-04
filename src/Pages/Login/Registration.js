import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';




const Registration = () => {
  const navigate=useNavigate();
  const [errorMsg,setErrorMsg]=useState('')
  
    const { register, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        
      ] = useCreateUserWithEmailAndPassword(auth);
  const onSubmit =async data => {
   if(data.check !== true){
    setErrorMsg('plese agree!')
   
   }  
   else if (data.password!== data.retypePassword){
    
    setErrorMsg('password mismatch!')

   }
   else{
    const email=data.email;
    const password=data.password;
    const name=data.name;
   await  createUserWithEmailAndPassword(email,password);
 
   

   }
   
  }
  if(user){
    navigate('/');
   }
  
  
  
    return (
        <div className=''>
            <h2 className='text-center m-4'>register please</h2>
            <form className='d-flex flex-column w-100 justify-content-center align-items-center' onSubmit={handleSubmit(onSubmit)}>
                
      <input className='w-50 mb-3 p-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
      <input className='w-50 mb-3 p-2' placeholder='email' {...register("email")} />
      <input className='w-50 mb-3 p-2' type="password" placeholder='password' {...register("password")} />
      <input className='w-50 mb-3 p-2' type="password" placeholder='retype pasword' {...register("retypePassword")} />
      
    <div className=' w-50 d-block'>
    <input type="checkbox" className="form-check-input"
     {...register("check")} 
    id="exampleCheck1"/>
    <label className="form-check-label ms-2" htmlFor="exampleCheck1">I agree to the terms and conditions</label>
    </div>
     <p className='text-danger'>{errorMsg}</p>
     <p className='w-50'>Already a member? <span> <Link  className='text-decoration-none text-warning font-bold'  to='/login'>Please Login</Link></span></p>
        
      <input type="submit" value='Sign in' className='btn btn-secondary font-bold px-5 py-2' />
      
    </form>
    {loading}
   
    
        </div>
    );
};

export default Registration;