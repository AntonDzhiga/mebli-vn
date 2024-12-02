import React from 'react';
import './Header.css';
import { header_first_image,
  header_second_image
 } from "../../assets/Header";

const Header = () => {
  return (
    <div className='header'>
        <div className='header__image-wrapper'>
            <div className='header__image header__image--home'>
                <img src={header_first_image} alt="Меблі для дому" />
                <div className='header__text'>Меблі для дому</div>
            </div>
            <div className='header__image header__image--store'>
                <img src={header_second_image} alt="Меблі для магазину" />
                <div className='header__text'>Меблі для магазину</div>
            </div>
        </div>
    </div>
  );
}

export default Header;
