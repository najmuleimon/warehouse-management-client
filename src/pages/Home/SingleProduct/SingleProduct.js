import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = ({product}) => {
    const {_id, name, price, image, description, quantity, supplier} = product;
    const navigate = useNavigate();
    return (
        <div className='col-md-6 col-lg-4'>
            <div className="card">
                <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <h4>Price: ${price}</h4>
                    <h5>Quantity: {quantity}</h5>
                    <h5>Supplier: {supplier}</h5>
                    <p className="card-text">{description}</p>
                    <button onClick={() => navigate(`/inventory/${_id}`)} className="btn-style">Manage</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;