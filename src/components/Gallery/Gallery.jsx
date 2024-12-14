import React from "react";
import BasicGallery from "./BasісGallery/LogicGallery";
import galleryData from "./galleryData";

const Gallery = () => {
  return (
    <div>
      {galleryData.map((gallery, index) => (
        <BasicGallery
          key={index}
          title={gallery.title}
          subtitle={gallery.subtitle}
          images={gallery.images}
        />
      ))}
    </div>
  );
};

export default Gallery;


