import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const [errorMsg,setErrorMsg]=useState('');
    const { register, handleSubmit } = useForm();
    const navigate=useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const onSubmit =async data => {
        const email=data.email;
        const password=data.password;
       await signInWithEmailAndPassword(email,password);
       if(error){
        // console.log(error.message);
        const errormsg=error.message.split(':');
        setErrorMsg(errormsg[1]);
       }
       
        
       
    }
    if(user){
        navigate('/');
    }
    
    return (
        <div className=''>
        <h2 className='text-center m-4'>Please Login</h2>
        <form className='d-flex flex-column w-100 justify-content-center align-items-center' onSubmit={handleSubmit(onSubmit)}>
            
  
  <input className='w-50 mb-3 p-2' placeholder='email' {...register("email")} />
  <input className='w-50 mb-3 p-2' type="password" placeholder='password' {...register("password")} />
<div className=' w-50 d-block'>

</div>
 <p className='text-danger'>{errorMsg}</p>
 <p className='w-50'>Not a member? <span> <Link  className='text-decoration-none text-warning font-bold'  to='/register'>Please SignUp</Link></span></p>
    
  <input type="submit" value='Sign in' className='btn btn-secondary font-bold px-5 py-2' />
  
</form>
{loading}
<SocialLogin></SocialLogin>


    </div>
    );
};

export default Login;