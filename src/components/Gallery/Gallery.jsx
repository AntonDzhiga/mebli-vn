import React from "react";
import {
  torg_left,
  torg_showcase,
  home_g_up
} from "../../assets/FurnitureImages";
import BasісGallery from "./BasісGallery/BasісGallery";

const Gallery = () => {
  const galleries = [
    {
      title: "Домашні меблі",
      subtitle: "Під замовлення",
      images: [
        [{ src: torg_showcase, alt: "Меблі 1" }],
        [
          { src: home_g_up, alt: "Меблі 2" },
          { src: torg_showcase, alt: "Меблі 3" },
        ],
        [{ src: torg_showcase, alt: "Меблі 4" }],
      ],
    },
    {
      title: "Фабричні меблі",
      subtitle: "Стандартні",
      images: [
        [{ src: torg_showcase, alt: "Кухня 1" }],
        [
          { src: torg_showcase, alt: "Кухня 2" },
          { src: torg_showcase, alt: "Кухня 3" },
        ],
        [{ src: torg_showcase, alt: "Кухня 4" }],
      ],
    },
    {
      title: "Торгівельне обладнання та офісні меблі",
      subtitle: "Індивідуальні проекти",
      images: [
        [{ src: torg_left, alt: "Офіс 1" }],
        [
          { src: torg_left, alt: "Офіс 2" },
          { src: torg_showcase, alt: "Офіс 3" },
        ],
        [{ src: torg_showcase, alt: "Офіс 4" }],
      ],
    },
  ];

  return (
    <div>
      {galleries.map((gallery, index) => (
        <BasісGallery
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
