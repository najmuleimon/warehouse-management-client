import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

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
            console.log(user);
            console.log(email);
            axios.post('http://localhost:5000/login', {email})
            .then(data => {
                localStorage.setItem('accessToken', data.data.accessToken);
                navigate(from, { replace: true });
                toast.info("Logged in successfully!!",{
                    theme: "colored"
                });
            })
            
        }
    }, [user])
    
    return (
        <div className='social-login-btn'>
            {googleError && <p className='error-msg'>{googleError.message}</p>}
            <button type='button' onClick={handleSignIn}>
                Continue with Google
            </button>
        </div>
    );
};

export default SocialLogin;