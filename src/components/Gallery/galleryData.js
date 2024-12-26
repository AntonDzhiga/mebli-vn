import {
  torg_showcase,
  home_up,
  home_left,
  home_right,
  home_down_second,
  torg_gallery_mirror,
  torg_gallery_reception,
  torg_gallery_beer_market
} from "../../assets/FurnitureImages";

const galleryData = [
  {
    title: "Домашні меблі",
    subtitle: "Під замовлення",
    images: [
      [{ src: home_left, alt: "Меблі 1" }],
      [
        { src: home_up, alt: "Меблі 2" },
        { src: home_down_second, alt: "Меблі 3" },
      ],
      [{ src: home_right, alt: "Меблі 4" }],
    ],
  },
  
  {
    title: "Торгове обладнання та офісні меблі",
    subtitle: "Індивідуальні проекти",
    images: [
      [{ src: torg_gallery_mirror, alt: "Тумба з зеркалом" }],
      [
        { src: torg_gallery_reception, alt: "Ресепшин" },
        { src: torg_gallery_beer_market, alt: "Магазин" },
      ],
      [{ src: torg_showcase, alt: "шафа з аідсвіткою" }],
    ],
  },
];

export default galleryData;
