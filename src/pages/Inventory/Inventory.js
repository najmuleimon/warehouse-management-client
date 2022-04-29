import React from 'react';
import { useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {
    const {id} = useParams();
    return (
        <div>
            this is inventory. Id: {id}
        </div>
    );
};

export default Inventory;