import { SlideshowIndicator } from "../../../components/details";
import BikeImage from "../../../resources/stumpjumper pro.webp";

export default {
  title: "Components/Index/SlideshowIndicator",
  components: SlideshowIndicator,
};

export const Primary = {
  render: () => <SlideshowIndicator imageSrc={BikeImage} />,
};
