import axios from 'axios';
import React from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProduct from '../../hooks/useProduct';

const UpdateItem = () => {
    const {id} = useParams();
    const [product, setProduct] = useProduct(id);

    // handle name
    const handleName = event => {
        const {name, ...rest} = product;
        const newName = event.target.value;
        const newProduct = {name: newName, ...rest};
        setProduct(newProduct);
    }
    // handle category
    const handleCategory = event => {
        const {category, ...rest} = product;
        const newCategory = event.target.value;
        const newProduct = {category: newCategory, ...rest};
        setProduct(newProduct);
    }
    // handle image
    const handleImage = event => {
        const {image, ...rest} = product;
        const newImage = event.target.value;
        const newProduct = {image: newImage, ...rest};
        setProduct(newProduct);
    }
    // handle price
    const handlePrice = event => {
        const {price, ...rest} = product;
        const newPrice = event.target.value;
        const newProduct = {price: newPrice, ...rest};
        setProduct(newProduct);
    }
    // handle quantity
    const handleQuantity = event => {
        const {quantity, ...rest} = product;
        const newQuantity = event.target.value;
        const newProduct = {quantity: newQuantity, ...rest};
        setProduct(newProduct);
    }
    // handle supplier
    const handleSupplier = event => {
        const {supplier, ...rest} = product;
        const newSupplier = event.target.value;
        const newProduct = {supplier: newSupplier, ...rest};
        setProduct(newProduct);
    }
    // handle description
    const handleDescription = event => {
        const {description, ...rest} = product;
        const newDescription = event.target.value;
        const newProduct = {description: newDescription, ...rest};
        setProduct(newProduct);
    }

    const handleUpdateProduct = async (event) => {
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

        
        const url = `https://hidden-cliffs-98459.herokuapp.com/update/${id}`;
        axios.put(url, product)
        .then(response =>{
            const {data} = response;
            if(data.acknowledged){
                toast.info("Product updated successfully!",{
                    theme: "colored"
                });
            }
        })
    }

    return (
        <div className='add-item'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title">
                            <h2>Update Inventory</h2>
                        </div>
                        <Form className='text-start' onSubmit={handleUpdateProduct}>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Product name" name="proName" value={product.name} onChange={handleName}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" placeholder="Category" name="category" value={product.category} onChange={handleCategory}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Image Link</Form.Label>
                                <Form.Control type="text" placeholder="Image link" name="imgLink" value={product.image} onChange={handleImage}/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder="Price" name="price" value={product.price} onChange={handlePrice}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" placeholder="Quantity" name="quantity" value={product.quantity} onChange={handleQuantity}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Supplier</Form.Label>
                                <Form.Control type="text" placeholder="Supplier" name="supplier" value={product.supplier} onChange={handleSupplier}/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" placeholder="Product Description" name="description" value={product.description} onChange={handleDescription}/>
                            </Form.Group>

                            <button type="submit" className='btn-style'>
                                Update
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;