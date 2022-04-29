import React from 'react';
import './Brands.css';
import brand1 from '../../../images/brand1.jpg';
import brand2 from '../../../images/brand2.jpg';
import brand3 from '../../../images/brand3.jpg';
import brand4 from '../../../images/brand4.jpg';
import brand5 from '../../../images/brand5.jpg';
import brand6 from '../../../images/brand6.jpg';

const Brands = () => {
    return (
        <div className='brands'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="item">
                            <img src={brand1} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="item">
                            <img src={brand2} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="item">
                            <img src={brand3} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="item">
                            <img src={brand4} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="item">
                            <img src={brand5} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="item">
                            <img src={brand6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brands;
