import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>Copyright &copy; All right reserved by Najmul {year}</p>
                    </div>
                    <div className="col-md-6">
                        <ul className='d-flex justify-content-end'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/inventory">inventory</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;