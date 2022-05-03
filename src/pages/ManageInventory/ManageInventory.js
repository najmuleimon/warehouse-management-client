import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAllProducts from '../../hooks/useAllProducts';
import {BsTrash} from 'react-icons/bs';
import {BiAddToQueue} from 'react-icons/bi';
import './ManageInventory.css';

const ManageInventory = () => {
    const [allProducts, setAllProducts] = useAllProducts();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    let count = 1;

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        const email = user.email;
        if(proceed){
            const url = `http://localhost:5000/product/${id}?email=${email}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = allProducts.filter(product => product._id !== id);
                setAllProducts(remaining);
                toast.info("Deleted Successfully!",{
                    theme: "colored"
                });
            });
        }
        
    }
    return (
        <div className='manage-product'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex justify-content-end btn-area">
                            <button onClick={() => navigate('/add')} className="btn-style">Add new Item <BiAddToQueue className='icon'/></button>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="title">
                            <h2>Manage Products</h2>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Serial</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Product Id</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Update</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    allProducts.map(product => <tr key={product._id}>
                                        <td>{count++}</td>
                                        <td>{product.name}</td>
                                        <td>{product._id}</td>
                                        <td>{product.category}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.price}</td>
                                        <td><button onClick={() => navigate(`/inventory/${product._id}`)} className='btn btn-info text-white'>Update</button></td>
                                        <td><button onClick={() => handleDelete(product._id)} className='btn btn-danger'><BsTrash/></button></td>
                                    </tr>)
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;