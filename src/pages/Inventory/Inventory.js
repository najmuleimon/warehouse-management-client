import React, {useEffect} from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import './Inventory.css';

const Inventory = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useProduct(id);

    // handle deliver item
    const handleDelivery = () => {
        let quantity = JSON.parse(product.quantity);
        let newQuantity = JSON.stringify(quantity - 1);

        const url = `http://localhost:5000/product/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...product, quantity: newQuantity})
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            setProduct({...product});
        });
    }

    // handle restock item
    const handleRestock = (e) => {
        e.preventDefault();
        let quantity = JSON.parse(product.quantity)
        let givenQuantity = parseInt(e.target.prodQuantity.value);
        let newQuantity = quantity + givenQuantity;
        
        const url = `http://localhost:5000/product/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({...product, quantity: newQuantity})
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            setProduct({...product});
            e.target.reset();
        });
    }
    return (
        <div className='single-inventory'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="d-flex justify-content-end">
                            <button onClick={() => navigate('/manage')} className="btn-style">Manage Inventories</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="image">
                            <img src={product.image} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single">
                            <h3>Product Id: {product._id}</h3>
                            <h3>Name: {product.name}</h3>
                            <h3>Category: {product.category}</h3>
                            <h3>Price: ${product.price}</h3>
                            <p>Details: {product.description}</p>
                            <h3>Supplier: {product.supplier}</h3>
                            <h3>Quantity: {product.quantity}</h3>
                            <h3>{product.quantity > 0 ? "on sale" : "sold"}</h3>
                            <button onClick={handleDelivery} className="btn-style">Delivered</button>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <h3>Restock Item</h3>
                        <Form className='text-start' onSubmit={handleRestock}>
                            <Form.Group className="mb-3">
                                <Form.Label>Product quantity</Form.Label>
                                <Form.Control type="number" placeholder="Enter product quantity" name="prodQuantity" required/>
                            </Form.Group>
                            <button type="submit" className='btn-style'>
                                Restock
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;