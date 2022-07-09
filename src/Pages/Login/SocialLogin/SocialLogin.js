import React from 'react';
import google from '../../../images/google.png'
import facebook from '../../../images/facebook logo.png'
import github from '../../../images/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';


const SocialLogin = () => {
    // git client id : 629dc2755be5191c5439
    // git clientsecret: 3d0847ea3bc114665e08389381504ff8031a1c52

    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);


    let errorElement;
    if(loading || loading1 ){
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement = (
            <div>
                <p className='text-center text-danger'>Error: {error?.message} {error1?.message}</p>
            </div>
        );
    }
    if (user || user1) {
        navigate('/')
    }
  
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>
            {/* <div className='d-flex   justify-content-center'> */}
            <div>
                <button onClick={() => signInWithGoogle()} className="btn btn-info d-block w-50 mx-auto my-2">
                    <img width={'30px'} src={google} alt="" />
                    <span className='px-2'>google sign in</span>
                </button>
                {errorElement}
                <button className="btn btn-info d-block w-50 mx-auto my-2">
                    <img width={'30px'} src={facebook} alt="" />
                    <span className='px-2'>Facebook sign in</span>
                </button>
                <button  onClick={() => signInWithGithub()} className="btn btn-info d-block w-50 mx-auto my-2">
                    <img width={'30px'} src={github} alt="" />
                    <span className='px-2'>Github sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;