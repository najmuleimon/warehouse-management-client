import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';

const Products = () => {

    const products = [
        {id: 1, name: 'Fitness exercise routine', quantity: 10, supplierName: "Supplier", price: 999, img: 'https://htmldemo.net/rozer/rozer/assets/images/product-image/8.jpg', description: 'You can get a proper and detailed fitness exercise routine. This routine includes diet chart, when to eat, what to eat, when to do exercise, which exercise on which time, which day etc.'},
        {id: 2, name: 'Weight loss', quantity: 10, supplierName: "Supplier", price: 789, img: 'https://htmldemo.net/rozer/rozer/assets/images/product-image/8.jpg', description: 'If you are over weight, you can get a weight loss training to reduce your extra weight and get fit. '},
        {id: 3, name: 'Fat burning course', quantity: 10, supplierName: "Supplier", price: 651, img: 'https://htmldemo.net/rozer/rozer/assets/images/product-image/8.jpg', description: 'If you are Fat and you have suffering from you extra fat in your body this course is a remedy for you to burn your fat and get slim and fit.'},
        {id: 4, name: 'Neck exercise for neck pain', quantity: 10, supplierName: "Supplier", price: 487, img: 'https://htmldemo.net/rozer/rozer/assets/images/product-image/8.jpg', description: 'If you have neck pain and you will get relief from your pain you can try my neck exercise course to get back from you pain.'},
        {id: 5, name: 'Muscle building course', quantity: 10, supplierName: "Supplier", price: 879, img: 'https://htmldemo.net/rozer/rozer/assets/images/product-image/8.jpg', description: 'If you are under weight or slim person and you want to get bigger muscle or get weight, this muscle building course will help you to get perfect body weight and enhance your muscle power.'},
        {id: 6, name: 'Yoga and meditation', quantity: 10, supplierName: "Supplier", price: 458, img: 'https://htmldemo.net/rozer/rozer/assets/images/product-image/8.jpg', description: 'Yoga and meditation have both become increasingly popular in the Western world, and practitioners praise their psychological and physical benefits. Current research also suggests that meditating and doing yoga can boost overall well-being and resilience to stress factors.'}
    ]
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
                        products.map(product => <SingleProduct key={product.id} product={product}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;