import bikeImg from "../../resources/stumpjumper pro.webp";

const slides = [
  {
    image: bikeImg,
    year: 2023,
    size: "M",
    driveTrain: "Shimano X01 Di2",
    brand: "Specialized",
    model: "Sworks",
    type: "Enduro",
    price: 5000,
  },
  {
    image: bikeImg,
    year: 2023,
    size: "M",
    driveTrain: "Duraace  Di2",
    brand: "trek",
    model: "Speed Concept",
    type: "Triathelon",
    price: 5000,
  },
  {
    image: bikeImg,
    year: 2023,
    size: "L",
    driveTrain: "Shimano X01 Di2",
    brand: "Trek",
    model: "Fuel EX 8",
    type: "Mountain",
    price: 5000,
  },
  {
    image: bikeImg,
    year: 2023,
    size: "M",
    driveTrain: "Shimano X01 Di2",
    brand: "Specialized",
    model: "Sworks",
    type: "Enduro",
    price: 5000,
  },
];
export const SlideshowHook = () => {
  return slides;
};
