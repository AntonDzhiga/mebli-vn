import React from "react";
import "./AboutUs.css";
import { torg_left } from "../../assets/FurnitureImages";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us__container">
        {/* Зображення для великих екранів */}
        <div className="about-us__image-desktop">
          <img src={torg_left} alt="Про нас" />
        </div>

        <div className="about-us__text-contain">
          {/* Заголовок для великих екранів */}
          <h2 className="about-us__title-desktop">Про нас</h2>
          <h3 className="about-us__subtitle">Меблі ВН</h3>
          <p className="about-us__description">
            Ми спеціалізуємося на створенні функціональних і естетично привабливих
            приміщень для житлових і комерційних клієнтів. Співпрацюючи з
            архітекторами, будівельниками та домовласниками, ми перетворюємо
            інтер’єри на зручне та гармонійне середовище.
          </p>
        </div>
        
        <div className="about-us__image-desktop">
          <img src={torg_left} alt="Про нас" />
        </div>


        {/* <div className="about-us__image-mobile">
          <img src={home_blum} alt="Про нас" />
        </div> */}

        {/* Спеціальне зображення для планшетів/маленьких екранів */}
        <div className="about-us__image_tablet-visible-tablet">
          <div className="about-us__image_tablet-item">
            <img src={torg_left} alt="Про нас" />
          </div>
          <div className="about-us__image_tablet-item">
            <img src={torg_left} alt="Про нас" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
