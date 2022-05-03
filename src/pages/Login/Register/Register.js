import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import signup from '../../../images/signup.jpg';
import './Register.css';

const Register = () => {
    const [userInfo, setUserInfo] = useState({
        email: '', password: '', confirmPassword: '' 
    });

    const [errors, setErrors] = useState({
        email: '', password: '', confirmPassword: '', agree: '', general: ''
    });

    const [ createUserWithEmailAndPassword, user, loading , createError] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if(loading || updating){
            return <Loading/>
        }
    }, [])
    
    useEffect(() => {
        if(createError){
            setErrors({...errors, general: createError.message});
            toast.error("Registration Failed!!",{
                theme: "colored"
            });
        }
    }, [createError]);

    // handle email
    const handleEmail = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, email: "" });
        } else {
            setErrors({ ...errors, email: "Invalid email" });
            setUserInfo({ ...userInfo, email: "" });
        }
    }

    // handle password
    const handlePassword = (event) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegex.test(event.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password must minimum eight characters, at least one letter, one number and one special character" });
            setUserInfo({ ...userInfo, password: "" });
        }
    }

    // handle confirm password
    const handleConfirmPassword = (event) => {
        if (event.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: event.target.value });
            setErrors({ ...errors, confirmPassword: "" });
        } else {
            setErrors({ ...errors, confirmPassword: "Confirm password didn't match" });
            setUserInfo({ ...userInfo, confirmPassword: "" });
        }
    }

    // handle register
    const handleSignUp = async (event) => {
        event.preventDefault();
        const userName = event.target.userName.value;
        const agree = event.target.terms.checked;

        if(agree){
            await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
            await updateProfile({ displayName: userName });
        }
        else{
            setErrors({...errors, agree: "You have to agree the terms and conditions"})
        }
        
    }

    useEffect(() => {
        if(user){
            navigate('/');
            toast.info("Account created successfully!!",{
                theme: "colored"
            });
        }
    }, [user])
    return (
        <div className='register'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="img">
                            <img src={signup} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="main-form">
                            <Form className='text-start' onSubmit={handleSignUp}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="userName" required/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" required onChange={handleEmail}/>
                                    {errors?.email && <p className='error-msg'>{errors.email}</p>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" required onChange={handlePassword}/>
                                    {errors?.password && <p className='error-msg'>{errors.password}</p>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm password" name="confirmPassword" required onChange={handleConfirmPassword}/>
                                    {errors?.confirmPassword && <p className='error-msg'>{errors.confirmPassword}</p>}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="I agree the Terms and Conditions" name="terms" />
                                    {errors?.agree && <p className='error-msg'>{errors.agree}</p>}
                                </Form.Group>
                                <button type="submit" className='btn-style'>
                                    Sign up
                                </button>
                            </Form>
                            {errors?.general && <p className='error-msg'>{errors.general}</p>}

                            <p className='agree pt-3'>Already have an account? <Link to="/login">Login</Link></p>
                            <div className="social-login mt-3">
                                <SocialLogin/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;