import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = ({product}) => {
    const {id, name, price, img, description, quantity, supplierName} = product;
    const navigate = useNavigate();
    return (
        <div className='col-md-6 col-lg-4'>
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h4>Price: ${price}</h4>
                    <h5>Quantity: {quantity}</h5>
                    <h5>Supplier: {supplierName}</h5>
                    <p className="card-text">{description}</p>
                    <button onClick={() => navigate(`/inventory/${id}`)}>manage</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;