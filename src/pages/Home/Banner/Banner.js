import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>The biggest warehouse in the City</h1>
                        <p>Manage inventory easily by just a single click.</p>
                        <button>Manage Inventories</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;