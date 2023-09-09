import { SlideshowIndicator } from "../../../components/details";
import BikeImage from "../../../resources/stumpjumper pro.webp";

export default {
  title: "Components/Details/SlideshowIndicator",
  components: SlideshowIndicator,
};

export const Primary = {
  render: () => <SlideshowIndicator imageSrc={BikeImage} />,
};
