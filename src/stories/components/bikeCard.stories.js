import { BikeCard } from "../../components/bikeCard";
import bikeImg from "../../resources/stumpjumper pro.webp";

export default {
  title: "Components/BikeCard",
  component: BikeCard,
};

export const primary = {
  args: {
    image: bikeImg,
    year: 2023,
    size: "M",
    driveTrain: "Shimano X01 Di2",
    brand: "Specialized",
    model: "Sworks",
    type: "Enduro",
    price: 5000,
  },
};
