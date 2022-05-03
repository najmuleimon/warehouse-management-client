import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import {BsTrash} from 'react-icons/bs';
import {BiAddToQueue} from 'react-icons/bi';
import './MyItems.css';

const MyItems = () => {
    const [myProducts, setMyProducts] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    let count = 1;

    useEffect(() => {
        // axios
        const getMyProducts = async() =>{
            const email = user.email;
            const url = `http://localhost:5000/my-product?email=${email}`;

            try{
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyProducts(data);
            }
            catch(error){
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login');
                    toast.error("Access Denied!",{
                        theme: "colored"
                    });
                }
            }
            
        }
        getMyProducts();
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                const remaining = myProducts.filter(product => product._id !== id);
                setMyProducts(remaining);
            })
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
                            {
                                myProducts.length > 0 ? <h2>My added Products</h2> : <h2>No product added</h2>
                            }
                        </div>
                        
                        
                        { myProducts.length > 0 &&
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
                                    myProducts.map(product => <tr key={product._id}>
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
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyItems;