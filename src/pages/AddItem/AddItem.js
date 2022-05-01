import React from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import './AddItem.css';

const AddItem = () => {
    const handleAddProduct = async (event) => {
        event.preventDefault();

        const product = {
            name : event.target.proName.value,
            category : event.target.category.value,
            image : event.target.imgLink.value,
            price : event.target.price.value,
            quantity : event.target.quantity.value,
            supplier : event.target.supplier.value,
            description : event.target.description.value
        }

        try{
            const url = "http://localhost:5000/upload/";
            const {data} = await axios.post(url, product);
            console.log(data);
        }
        catch(error){

        }
    }
    return (
        <div className='add-item'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Form className='text-start' onSubmit={handleAddProduct}>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Product name" name="proName" required/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" placeholder="category" name="category" required/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Image Link</Form.Label>
                                <Form.Control type="text" placeholder="Image link" name="imgLink" required/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder="Price" name="price" required/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" placeholder="Quantity" name="quantity" required/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Supplier</Form.Label>
                                <Form.Control type="text" placeholder="Supplier" name="supplier" required/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" placeholder="Product Description" name="description" required/>
                            </Form.Group>

                            <button type="submit" className='btn-style'>
                                Add Item
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;