import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar: React.FC<{}> = () =>{
  return(
    <>
    <nav className='navbar'>
      <div className='navbar-container container'>
        <div className='navbar-logo'>
        <Link to='/'>
          <span>Froala</span>
        </Link>
        </div>
        <ul className='nav-menu active'>
          <li className='nav-item'>
            <Link to='/download' className='nav-links'>
              Overview
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/features' className='nav-links'>
              Features
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/docs' className='nav-links'>
              Docs
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/tour' className='nav-links'>
              Examples
            </Link>
          </li>
          <li className='nav-btn'>
            <Link to='/' className='btn-link pricing-btn'>
              Pricing
            </Link>
          </li>
          <li className='nav-btn'>
            <Link to='/' className='btn-link pricing-btn'>
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  )
}
export default Navbar;
