import React from "react";
import "./AboutUs.css";
import { home_blum } from "../../assets/FurnitureImages";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us__container">
        <div className="about-us__image-first">
          <img src={home_blum} alt="Про нас" />
        </div>
        <div className="about-us__text-contain">
          <h3 className="about-us__title">Про нас</h3>
          <p className="about-us__subtitle">Меблі ВН</p>
          <span className="about-us__description">
            Ми спеціалізуємося на створенні функціональних і естетично привабливих
            приміщень для житлових і комерційних клієнтів. Співпрацюючи з
            архітекторами, будівельниками та домовласниками, ми перетворюємо
            інтер’єри на зручне та гармонійне середовище.
          </span>
        </div>
        <div className="about-us__image-second">
          <img src={home_blum} alt="Про нас" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
