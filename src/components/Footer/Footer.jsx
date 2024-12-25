import React from 'react';
import "./Footer.css";
import {
  logo_mebli_vn,
  facebook,
  instagram
} from "../../assets/Footer";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__logo'>
        <img src={logo_mebli_vn} alt="" />
      </div>
      <div className='footer__container'>
      <div className='footer__contact'>
        <div className='footer__title'>
          <h2 className='footer__title-heading'>Звертайтесь до нас</h2>
          <ul className='footer__contact-list'>
            <li className='footer__contact-item'><a href="tel:+380966727311">+38 (096) 672 73 11</a></li>
            <li className='footer__contact-item'><a href="tel:+380950517624">+38 (095) 051 76 24</a></li>
            <li className='footer__contact-item'>maisternyamebleva@gmail.com</li>
            <li className='footer__contact-item'> Ми в соцмережах
              <div>
                <a href="https://www.instagram.com/maisternyamebli_vn/" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram"/>
                </a>

                <a href="https://www.facebook.com/profile.php?id=100094190306126&locale=uk_UA" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="Facebook"/>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__working-hours'>
        <h2 className='working-hours__heading'>Робочий час</h2>
          <div className='working-hours__list-contain'>
            <ul className='working-hours__list'>
              <li className='working-hours__item'>З понеділка по п’ятницю</li>
              <li className='working-hours__item'>9:00 - 19:00 </li>
              <li className='working-hours__item'>Субота</li>
              <li className='working-hours__item'>10:00 - 16:00</li>
              <li className='working-hours__item'>Неділя - вихідний</li>
            </ul>
          </div>
      </div>

      </div>
    </div>
  );
};

export default Footer;
