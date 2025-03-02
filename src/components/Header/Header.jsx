import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import "../Header/Header.scss";
import {
  header_logo
} from "../../assets/Header"



const Header = () => {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    }

    return (
        <div className="header">
            <div className="header-container">
              <div className="logo">
                <img src={header_logo} alt="Logo" />
              </div>
                <div className="burger-menu">
                    <input className="header-checkbox" type="checkbox" id="checkbox" onClick={toggleBurgerMenu} />
                    <label htmlFor="checkbox" className="toggle">
                        <div className="bars bar1" id="bar1"></div>
                        <div className="bars bar2" id="bar2"></div>
                        <div className="bars bar3" id="bar3"></div>
                    </label>
                </div>
                <Navigation isOpen={isBurgerMenuOpen}/>
            </div>
        </div>
    );
}

export default Header;