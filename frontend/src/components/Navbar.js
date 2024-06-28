// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="bg-primary text-white text-center py-3">
                <h2>Pearson Assessment</h2>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/"
                                    end
                                    style={({ isActive }) => ({
                                        color: isActive ? 'blue' : 'inherit',
                                        fontWeight: isActive ? 'bold' : 'normal'
                                    })}
                                >
                                    Submit Request
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    to="/requests"
                                    style={({ isActive }) => ({
                                        color: isActive ? 'blue' : 'inherit',
                                        fontWeight: isActive ? 'bold' : 'normal'
                                    })}
                                >
                                    View Requests
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
