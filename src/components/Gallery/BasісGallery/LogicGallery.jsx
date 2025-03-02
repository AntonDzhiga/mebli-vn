import React from "react";
import './LogicGallery.scss';

const BasicGallery = ({ title, subtitle, images }) => {
  return (
    <div className="basic-gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery__title">{title}</h2>
          <h3 className="gallery__subtitle">{subtitle}</h3>
        </div>
        <div className="gallery-content">
          {images.map((imageGroup, groupIndex) => (
            <div key={groupIndex} className={`gallery-group group-${groupIndex}`}>
              {imageGroup.map((image, imgIndex) => (
                <div key={imgIndex} className="gallery-item">
                  <img
                    className={`image-${groupIndex}-${imgIndex}`}
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
