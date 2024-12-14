import React from 'react';
import "./Footer.css";
import { instagram } from "../../assets/Footer";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__contact'>
        <div className='footer__title'>
          <h2 className='footer__title-heading'>Звертайтесь до нас</h2>
          <ul className='footer__contact-list'>
            <li className='footer__contact-item'>(123) 456-7890</li>
            <li className='footer__contact-item'>hello@reallygreatsite.com</li>
            <li className='footer__contact-item'><img src={instagram} alt="Instagram"/></li>
          </ul>
        </div>
      </div>
      <div className='footer__working-hours'>
        <h2 className='working-hours__heading'>Робочий час</h2>
        <table className='working-hours__table'>
          <tbody>
            <tr className='working-hours__row'>
              <td className='working-hours__cell'>Пн - Пт</td>
              <td className='working-hours__cell'>9:00 - 19:00</td>
            </tr>
            <tr className='working-hours__row'>
              <td className='working-hours__cell'>Сб</td>
              <td className='working-hours__cell'>10:00 - 16:00</td>
            </tr>
            <tr className='working-hours__row'>
              <td className='working-hours__cell'>Нд</td>
              <td className='working-hours__cell'>Вихідний</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Footer;
