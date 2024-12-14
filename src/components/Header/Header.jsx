import React from 'react';
import './Header.css';
import { header_first_image, header_second_image } from "../../assets/Header";

const Header = () => {
  return (
    <div className='header'>
      <div className='header__image-wrapper'>
        
        {/* Перший блок зображення та заголовка */}
        <div className='header__image-container'>
          <div className='header__image'>
            <img src={header_first_image} alt="Меблі для дому" />
          </div>
          <div className='header__text-container'>
            <h1 className='header__text'>Меблі для дому</h1>
          </div>
        </div>
        
        {/* Другий блок зображення та заголовка */}
        <div className='header__image-container'>
          <div className='header__image'>
            <img src={header_second_image} alt="Меблі для магазину" />
          </div>
          <div className='header__text-container'>
            <h1 className='header__text'>Торгове обладнання</h1>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;