import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Header/Header";


const Navigation = ({ isOpen }) => {
    return (
        <div className={`header-menu ${isOpen ? "open" : ""}`}>
            <ul className={`nav-header ${isOpen ? "open" : ""}`}>
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        Головна
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/gallery" 
                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                    >
                        Каталог
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;