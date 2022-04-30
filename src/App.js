import './App.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inventory from './pages/Inventory/Inventory';
import Blogs from './pages/Blogs/Blogs';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import AddItem from './pages/AddItem/AddItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Register/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageInventory/>
          </RequireAuth>
        }></Route>
        <Route path="/add" element={
          <RequireAuth>
            <AddItem/>
          </RequireAuth>
        }></Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <Inventory/>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
  );
}

export default App;
