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
                    <div className="col-sm-7">
                        <p>Copyright &copy; All right reserved by Najmul {year}</p>
                    </div>
                    <div className="col-sm-5">
                        <ul className='d-flex'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/blogs">Blogs</Link>
                            </li>
                            <li>
                                <Link to="/my-items">My Items</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;