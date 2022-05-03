import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Manage.css';

const Manage = () => {
    const navigate = useNavigate();
    return (
        <div className='manage'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="manage-bg text-center">
                            <button className='btn-style' onClick={() => navigate('/manage')}>Manage Inventories</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manage;