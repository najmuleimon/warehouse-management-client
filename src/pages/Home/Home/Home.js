import React from 'react';
import Banner from '../Banner/Banner';
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
        </div>
    );
};

export default Home;