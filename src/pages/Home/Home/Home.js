import React from 'react';
import Banner from '../Banner/Banner';
import Manage from '../Manage/Manage';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Manage/>
        </div>
    );
};

export default Home;