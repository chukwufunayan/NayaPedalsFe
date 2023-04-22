import { Button, Center, Stack, Text, Box } from "@chakra-ui/react";
import landingBannerImg from "../resources/landing-banner-img.jpg";
import { NavbarMobile } from "../components/navbarMobile";
import { Slideshow } from "../components/slideshow";

import { SlideshowHook } from "../stories/pages/slideshowHook";

const textProps = {
  color: "white",
  fontFamily: "Intern",
};
export const LandingPage = () => {
  const slides = SlideshowHook();
  return (
    <Box position={"relative"}>
      <NavbarMobile />
      <Center
        background={`no-repeat center/cover url(${landingBannerImg})`}
        height={"80vh"}
      >
        <Stack alignItems={"center"} spacing={".5rem"}>
          <Text {...textProps} fontSize={"1.65rem"} fontWeight={"bold"}>
            We Buy Your Bikes
          </Text>
          <Text {...textProps} fontSize={"1.28rem"} fontWeight={"semibold"}>
            New or used. It has value to us.
          </Text>
          <Stack>
            <Button bg={"black"} color={"white"} border={"solid white .1rem"}>
              Sell a bike
            </Button>
            <Button border={"solid black .1rem"}>Buy a bike</Button>
          </Stack>
        </Stack>
      </Center>
      <Box>
        <Text
          {...textProps}
          fontSize={"1.65rem"}
          fontWeight={"bold"}
          textAlign={"center"}
          marginTop={"1.5rem"}
        >
          Find a bike for yourself
        </Text>
        <Slideshow slides={slides} />
        <Button fontFamily={"Inter"} fontSize={"1.28rem"}>
          Explore the inventory
        </Button>
      </Box>
    </Box>
  );
};
