import React from 'react';
import './Category.css';
import cat1 from '../../../images/cat1.jpg';
import cat2 from '../../../images/cat2.jpg';
import cat3 from '../../../images/cat3.jpg';

const Category = () => {
    return (
        <div className='category'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="category-inner">
                            <img src={cat1} alt="" />
                            <div className="content">
                                <h3>Gaming Console</h3>
                                <p>All the gaming products and accessories.</p>
                                <button className='btn-style'>Manage Products</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="category-inner">
                            <img src={cat2} alt="" />
                            <div className="content">
                                <h3>House Entertainment</h3>
                                <p>All the home entertainment products and accessories.</p>
                                <button className='btn-style'>Manage Products</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="category-inner">
                            <img src={cat3} alt="" />
                            <div className="content">
                                <h3>Laptop Computer</h3>
                                <p>All brand laptops and laptop accessories</p>
                                <button className='btn-style'>Manage Products</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;