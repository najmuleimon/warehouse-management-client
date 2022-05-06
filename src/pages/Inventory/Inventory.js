import React from 'react';
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
        let newQuantity
        if(quantity > 0){
            newQuantity = quantity - 1;
            setProduct({...product, quantity: newQuantity});

            const url = `https://hidden-cliffs-98459.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({quantity: newQuantity})
            })
            .then(res=> res.json())
            .then(data =>{
                console.log(data);
            });
        }
    }

    // handle restock item
    const handleRestock = (e) => {
        e.preventDefault();
        let quantity = JSON.parse(product.quantity)
        let givenQuantity = parseInt(e.target.prodQuantity.value);
        let newQuantity = quantity + givenQuantity;
        setProduct({...product, quantity: newQuantity})
        
        const url = `https://hidden-cliffs-98459.herokuapp.com/product/${id}`;
        console.log(url);
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({quantity: newQuantity})
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data);
            e.target.reset();
        });
    }
    return (
        <div className='single-inventory'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="d-flex justify-content-end btn-area">
                            <button onClick={() => navigate('/manage')} className="btn-style">Manage Inventories</button>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="image">
                            <img src={product.image} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="single">
                            <h3><span>Product Id:</span> {product._id}</h3>
                            <h3><span>Name:</span> {product.name}</h3>
                            <h4><span>Category:</span> {product.category}</h4>
                            <h4><span>Price:</span> ${product.price}</h4>
                            <p><span>Details:</span> {product.description}</p>
                            <h4><span>Supplier:</span> {product.supplier}</h4>
                            <h4><span>Quantity:</span> {product.quantity}</h4>
                            <h4>{product.quantity > 0 ? "on sale" : "sold"}</h4>
                            <button onClick={handleDelivery} className="btn-style" disabled={product.quantity <= 0 ? true : false}>Delivered</button>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="restock">
                            <h2>Restock Item</h2>
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
        </div>
    );
};

export default Inventory;