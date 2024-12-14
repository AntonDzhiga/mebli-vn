import React from "react";
import './LogicGallery.css';

const BasicGallery = ({ title, subtitle, images }) => {
  return (
    <div className="basic-gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
        <div className="gallery-content">
          {images.map((imageGroup, groupIndex) => (
            <div key={groupIndex} className={`gallery-group group-${groupIndex}`}>
              {imageGroup.map((image, imgIndex) => (
                <div key={imgIndex} className="gallery-item">
                  <img
                    className={`image-${groupIndex}-${imgIndex}`} // Додаємо унікальні класи
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasicGallery;
