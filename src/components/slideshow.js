import { Slide } from "react-slideshow-image";
import { BikeCard } from "./bikeCard";
import "react-slideshow-image/dist/styles.css";
import { Box, Circle, useBreakpointValue } from "@chakra-ui/react";

export const Slideshow = ({ slides }) => {
  const slidePropValues = useBreakpointValue(
    {
      base: { slidesToShow: 1, slidesToScroll: 1 },
      sm: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },

      xl: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    { ssr: false }
  );
  const indicatorFunction = () => (
    <Circle
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
      {slides.map((slide, index) => (
        <Box padding={["1.25rem"]}>
          <BikeCard {...slide} key={index} />
        </Box>
      ))}
    </Slide>
  );
};
