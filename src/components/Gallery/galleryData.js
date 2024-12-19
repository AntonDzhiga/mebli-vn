import {
  torg_left,
  torg_showcase,
  home_up,
  home_left,
  home_right,
  home_down_second,
  torg_gallery_second
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
    title: "Торгівельне обладнання та офісні меблі",
    subtitle: "Індивідуальні проекти",
    images: [
      [{ src: torg_gallery_second, alt: "Офіс 1" }],
      [
        { src: torg_left, alt: "Офіс 2" },
        { src: torg_showcase, alt: "Офіс 3" },
      ],
      [{ src: torg_showcase, alt: "Офіс 4" }],
    ],
  },
];

export default galleryData;
