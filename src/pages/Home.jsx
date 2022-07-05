import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import Login from './Login'

const Home = () => {

  return (
    <>
    {/* {location.state.user ? 
    <div>
    <Navbar />
    <Announcement />
    <Slider />
    <Categories />
    <Products />
    <Newsletter />
    <Footer />
    </div> :
    <Login />
     } */}
      <div>
    <Navbar />
    <Announcement />
    <Slider />
    <Categories />
    <Products />
    <Newsletter />
    <Footer />
    </div>
    
    </>
    
  )
}

export default Home