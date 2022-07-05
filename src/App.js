import React from 'react'
import Home from './pages/Home';
import './App.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import SuccessLogin from './pages/SuccessLogin';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

import { Routes, Route, Link } from "react-router-dom";

function App() {

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
  })

  return (
    <div>
    {/* <Routes>
    
       <Route path='/' element={<Home />}></Route>
       <Route path='/cart' element={<Cart />}></Route>
       <Route path='/login' element={<Login />} />
       <Route path="/register" element={<Register />}/>
       <Route path="/productList" element={<ProductList />}/>
       <Route path="/product/:id" element={<Product />}/>
       <Route path="/successLogin" element={<SuccessLogin />} />
     </Routes> */}
    { 
      user ? <Routes>
       <Route path='/' element={<Home />}></Route>
       <Route path='/cart' element={<Cart />}></Route>
       <Route path='/login' element={<Login />}></Route>
       
       <Route path="/productList" element={<ProductList />}/>
       <Route path="/product/:id" element={<Product />}/>
       <Route path="/successLogin" element={<SuccessLogin />} />
     </Routes> : <div>
     <Routes>
     <Route path="/register" element={<Register />}/>
     </Routes>
     <Login />
     </div>
     
     }
     
    </div>
  );
}

export default App;
