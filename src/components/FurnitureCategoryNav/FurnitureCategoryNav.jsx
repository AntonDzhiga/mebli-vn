import React from 'react';
import './FurnitureCategoryNav.scss';
import { header_first_image, header_second_image } from "../../assets/Header";

const FurnitureCategoryItem = ({ image, textTitle, textContent, reversed }) => {
  return (
    <div className={`furniture-category-nav__content ${reversed ? "reversed" : ""}`}>
      <div className="furniture-category-nav__image">
        <img src={image} alt="Modern Interior" />
      </div>
      <div className="furniture-category-nav__text">
        <h2>{textTitle}</h2>
        <p>{textContent}</p>
        <button className="furniture-category-nav__button">Learn More</button>
      </div>
    </div>
  );
};

const FurnitureCategoryNav = () => {
  return (
    <div className="furniture-category-nav">
      <FurnitureCategoryItem
        image={header_first_image}
        textTitle="We help you make modern interior"
        textContent="We will help you to make an elegant and luxurious interior designed by professional interior designers."
        reversed={false}
      />
      <FurnitureCategoryItem
        image={header_second_image}
        textTitle="We help you make modern interior"
        textContent="We will help you to make an elegant and luxurious interior designed by professional interior designers."
        reversed={true}
      />
    </div>
  );
};

export default FurnitureCategoryNav;
