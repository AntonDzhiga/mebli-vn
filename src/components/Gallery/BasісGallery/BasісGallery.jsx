import React from "react";
import './BasісGallery.css';

const BasісGallery = ({ title, subtitle, images }) => {
  return (
    <div className="basіс-gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
        <div className="gallery-content">
          {images.map((imageGroup, groupIndex) => (
            <div
              key={groupIndex}
              className={`gallery-group group-${groupIndex}`}
            >
              {imageGroup.map((image, imgIndex) => (
                <div key={imgIndex} className="gallery-item">
                  <img src={image.src} alt={image.alt} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BasісGallery;
