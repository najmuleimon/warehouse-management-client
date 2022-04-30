import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo1.png';
import './Header.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    // sign out
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <header>
            <Navbar expand="md" className='bg-light'>
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        toggle
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Home</NavLink>
                        <NavLink to="/blogs" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Blogs</NavLink>
                        {
                            user && <>
                                <NavLink to="/manage" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Manage Inventory</NavLink>
                                <NavLink to="/add" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Add new Item</NavLink>
                            </>
                        }
                        {
                            user ? <button onClick={handleSignOut} className='nav-link text-start'>Sign out</button> :
                            <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link nav-link" : "nav-link")}>Login</NavLink>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;