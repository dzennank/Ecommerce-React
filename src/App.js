import React from 'react'
import Home from './pages/Home';
import './App.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
     <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='cart' element={<Cart />}></Route>
       <Route path="/register" element={<Register />}/>
       <Route path="/login" element={<Login />}/>
       <Route path="/productList" element={<ProductList />}/>
       <Route path="/product" element={<Product />}/>
     </Routes>
    </div>
  );
}

export default App;
