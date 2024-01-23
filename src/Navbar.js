import React from 'react'
import './App.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import Productlink from './Productlink.js';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Router, Routes } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className=' container-fluid p-3'>
                <div className='text-center nav-Home'>
                    <ul>
                        <img src='../images/logo.png' className='nav-image' />
                        <li className='fontf'>
                            <a href='home'>Home</a>
                            <a href={<Productlink />}>Our Products</a>
                            <a href='about' >About Us</a>
                            <a href='contact' >Contact </a>
                            {/* <Router>
                                <Route  path='product' element={<Productlink />} />
                            </Router> */}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
