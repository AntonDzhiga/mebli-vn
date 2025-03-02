import React from "react";
import "./OurService.scss";
import { 
    home_blum,
    torg_gallery_napoleon
 } from "../../assets/FurnitureImages";

const OurService = () => {
  return (
    <div className="services">
            <div className="services__heading">
                <h2 className="services__title">Послуги</h2>
                <h3 className="services__subtitle">Ми пропонуємо</h3>
            </div>
        <div className="services__wrapper">
            <div className="services__list-container">
                <ul className="services__list">
                    <li className="services__list-item">Планування простору</li>
                    <li className="services__list-item">Концепції дизайну</li>
                    <li className="services__list-item">Підбір фурнітури</li>
                    <li className="services__list-item">Плани освітлення</li>
                    <li className="services__list-item">Вибір кольорів та матеріалів</li>
                    <li className="services__list-item">3D візуалізація</li>
                    <li className="services__list-item">Виготовлення</li>
                    <li className="services__list-item">Монтаж</li>
                </ul>
            </div>
            <div className="services__images">
                <div className="services__image-item">
                    <img src={home_blum} alt="Про нас" />
                </div>
                <div className="services__image-item">
                    <img src={torg_gallery_napoleon} alt="Про нас" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default OurService;
