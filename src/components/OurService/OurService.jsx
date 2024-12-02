import React from "react";
import "./OurService.css";
import { home_blum } from "../../assets/FurnitureImages";

const OurService = () => {
  return (
    <div className="services">
        <h3 className="services__heading">Послуги</h3>
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
                    <img src={home_blum} alt="Про нас" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default OurService;
