import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import googleIcon from '../../../images/google.png';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, loading, googleError] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleSignIn = () => {
        signInWithGoogle();
    }
    useEffect(() => {
        if(user){
            const email = user.email;
            axios.post('http://localhost:5000/login', {email})
            .then(data => {
                localStorage.setItem('accessToken', data.data.accessToken);
                navigate(from, { replace: true });
                
            }); 
        }
        if(googleUser){
            toast.info("Logged in successfully!!",{
                theme: "colored"
            });
        }
    }, [user])
    
    return (
        <div className='social-login-btn'>
            {googleError && <p className='error-msg'>{googleError.message}</p>}
            <button type='button' className='google-btn' onClick={handleSignIn}>
                <img src={googleIcon} alt="" />
                Continue with Google
            </button>
        </div>
    );
};

export default SocialLogin;