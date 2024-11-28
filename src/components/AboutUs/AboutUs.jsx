import React from "react";
import  "./AboutUs.css";
import {
    main_img,
    fur_v
} from "../../assets/Header"

const AboutUs = () => {
  return (
    <div className='about-us'>
        <div className='about-us__contain'>
            <div className='about-us__text-container'>
                <h3 className='about-us__title'>Про нас</h3>
                <p className='about-us__subtitle'>Меблі ВН</p>
                <span className='about-us__description'> Ми спеціалізуємося на створенні функціональних і естетично привабливих приміщень для житлових і комерційних клієнтів. Співпрацюючи з архітекторами, будівельниками та домовласниками, ми перетворюємо інтер’єри на зручне та гармонійне середовище.
                </span>
            </div>
                <div className="about-us__image-first">
                    <img src={main_img} alt="Про нас" />
                </div>
                <div className="about-us__image-second">
                    <img src={fur_v} alt="Про нас" />
                </div>
        </div>
    </div>
  )
}

export default AboutUs;
