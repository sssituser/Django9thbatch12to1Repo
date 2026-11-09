import React from "react";
import {Link}  from 'react-router-dom'
function Navbar(){
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-sm bg-secondary text-white">
                <Link to="/" className="navbar-brand nav-link text-white">Home</Link>
                <div className="container">
                    <ul className="nav">
                            <li className="nav-item">
                                <Link to="/register"  className="nav-link text-white">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about"  className="nav-link text-white">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact"  className="nav-link text-white">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/employees"  className="nav-link text-white">Employees</Link>
                            </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default Navbar;