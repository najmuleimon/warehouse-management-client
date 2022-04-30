import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            navigate('/');
            toast.info("Logged in successfully!!",{
                theme: "colored"
            });
        }
    }, [user]);
    return (
        <div className='social-login-btn'>
            {googleError && <p className='error-msg'>{googleError.message}</p>}
            <button type='button' onClick={() => signInWithGoogle()}>
                Continue with Google
            </button>
        </div>
    );
};

export default SocialLogin;