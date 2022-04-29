import React from 'react';
import './SingleProduct.css';

const SingleProduct = ({product}) => {
    const {id, name, price, img, description, quantity, supplierName} = product;
    // name, image, short description, price, quantity, supplier name
    return (
        <div className='col-md-6 col-lg-4'>
            <div class="card">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h4>Price: ${price}</h4>
                    <h5>Quantity: {quantity}</h5>
                    <h5>Supplier: {supplierName}</h5>
                    <p class="card-text">{description}</p>
                    <button>manage</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;