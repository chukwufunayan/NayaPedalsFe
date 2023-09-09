import { Slide } from "react-slideshow-image";
import { BikeCard } from "./bikeCard";
import { SlideshowIndicator } from "./details";
import "react-slideshow-image/dist/styles.css";
import { Circle, useBreakpointValue, Image } from "@chakra-ui/react";

export const Slideshow = ({ slides }) => {
  console.log("inside slideshow: ");
  const slidePropValues = useBreakpointValue({
    base: { slidesToShow: 1, slidesToScroll: 1 },
    md: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
    lg: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
    xl: {
      slidesToShow: 4,
      slidesToScroll: 2,
    },
  });
  const indicatorFunction = (index) => (
    <Circle
      className="indicator"
      size="1.25rem"
      bg="nayaPedalsColor.lightGrey"
      marginRight={".5rem"}
      marginTop={"0px"}
    />
  );
  return (
    <Slide
      indicators={indicatorFunction}
      slidesToShow={slidePropValues?.slidesToShow}
      slidesToScroll={slidePropValues?.slidesToScroll}
    >
      {slides &&
        slides.map((slide, index) => <BikeCard {...slide} key={index} />)}
    </Slide>
  );
};
