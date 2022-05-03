import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from '../../images/notfound.jpg';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='not-found'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="content text-center">
                            <img src={notFound} alt="" />
                            <h2>Sorry! We can not find your request.</h2>
                            <button onClick={() => navigate('/')} className="btn-style">Go back Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;