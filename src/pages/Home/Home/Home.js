import React from 'react';
import Banner from '../Banner/Banner';
import Brands from '../Brands/Brands';
import Category from '../Category/Category';
import Manage from '../Manage/Manage';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Manage/>
            <Category/>
            <Brands/>
        </div>
    );
};

export default Home;