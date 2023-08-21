import React from 'react'
import logo from '../assets/angel 1.png';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="main-navbar">
        <img src={logo} alt="logo" />
        <div className="links">
          <Link to='/' className='p'>Home</Link>
          <Link to='/discover' className='p'>Discover</Link>
          <Link to='/features' className='p'>Features</Link>
          <Link to='/how-it-works' className='p lastP'>How it works</Link>
        </div>
        <Link to='/login'><button className='loginBtn'>Login</button></Link>
    </div>
  )
}

export default Navbar