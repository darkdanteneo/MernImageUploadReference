import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Image Gallery</Link>
                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">All Images</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/upload" className="nav-link">Upload</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/search" className="nav-link">Search</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}