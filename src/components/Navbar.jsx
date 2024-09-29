import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../assets/logo.jpg";
import '../App.css';


const Navbar = ()=> {
    return(
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
        
            <div className="desktopMenu">
                <Link to="/" className="desktopMenuListItem">Home</Link>
                <Link to="/about" className="desktopMenuListItem"> About </Link>
                <Link to="/projects" className="desktopMenuListItem">Projects</Link>
                <Link to="/services" className="desktopMenuListItem">Services</Link>
                <Link to="/contact" className="desktopMenuListItem">Contact</Link>
            </div>
        </nav>
    );

}

export default Navbar;