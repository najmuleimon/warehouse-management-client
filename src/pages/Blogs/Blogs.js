import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="item">
                            <h3>Difference between javascript and nodejs</h3>
                            <p>Javascript is a programming language that is used for writing scripts on the website. NodeJS is a Javascript runtime environment.</p>
                        </div>
                        <div className="item">
                            <h3>When should you use nodejs and when should you use mongodb</h3>
                        </div>
                        <div className="item">
                            <h3>Differences between sql and nosql databases.</h3>
                        </div>
                        <div className="item">
                            <h3>What is the purpose of jwt and how does it work</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;