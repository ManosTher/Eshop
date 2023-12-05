// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './LandingPage/Layout';
import LandingPage from './LandingPage/LandingPage';
import AdminPage from './AdminPage/AdminPage';
import UserPage from './UserPage/UserPage';
import UserRegister from './UserPage/UserRegister';
import NavBar from './UserPage/NavBar';
import SideBar from './UserPage/SideBar';
import ProductList from './UserPage/ProductList';
import Login from './UserPage/Login';
import About from './UserPage/About';
import Contact from './UserPage/Contact';
import Cart from './UserPage/Cart';
import ProductModal from './UserPage/ProductModal';


function App() {
    return (
        <Router>
            <div className="App font-Vacelyn">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<LandingPage />} />
                        <Route path="/user" element={<UserPage />} />
                        <Route path="/admin/:selectedOption" element={<AdminPage />} />                        <Route path="/userRegister" element={<UserRegister />} />
                        <Route path="/navBar" element={<NavBar />} />
                        <Route path="/sideBar" element={<SideBar />} />
                        <Route path="/productList" element={<ProductList />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/productModal" element={<ProductModal />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;