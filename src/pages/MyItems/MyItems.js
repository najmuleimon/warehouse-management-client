import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
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
            console.log(user);
            console.log(email);
            const url = `http://localhost:5000/my-product?email=${email}`;

            try{
                const {data} = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setMyProducts(data);
            }
            // try{
            //     const {data} = await axios.get(url);
            //     setMyProducts(data);
            // }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
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
                        <div className="d-flex justify-content-end">
                            <button onClick={() => navigate('/add')} className="btn-style">Add new Item</button>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        {
                            myProducts.length > 0 ? <h2>My added Products</h2> : <h2>No product added</h2>
                        }
                        
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
                                        <td><h6>{product.name}</h6></td>
                                        <td><p>{product._id}</p></td>
                                        <td><h6>{product.category}</h6></td>
                                        <td><h6>{product.quantity}</h6></td>
                                        <td><h6>{product.price}</h6></td>
                                        <td><button onClick={() => navigate(`/inventory/${product._id}`)} className='btn btn-info'>Update</button></td>
                                        <td><button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete</button></td>
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