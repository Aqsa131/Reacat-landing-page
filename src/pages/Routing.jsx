import React from 'react'
import {Routes, Route } from "react-router-dom";
import About from "./About"
import Contact from './Contact';
import Home from './Home';
import Services from './Services';
import Products from "./Products"
const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products/>} />

            </Routes>
        </div>
    )
}

export default Routing
