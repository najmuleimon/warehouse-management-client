import React from 'react';
import useProducts from '../../../hooks/useProducts';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';

const Products = () => {
    const [products] = useProducts();
    return (
        <div className='products'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title">
                            <h2>Products</h2>
                        </div>
                    </div>
                    {
                        products.map(product => <SingleProduct key={product._id} product={product}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;