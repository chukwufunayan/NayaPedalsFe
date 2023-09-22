import { Button, Center, Stack, Text, Box, Flex } from "@chakra-ui/react";
import landingBannerImg from "../../resources/landing-banner-img.jpg";
import { NavbarMobile } from "../../components/navbarMobile";
import { Slideshow } from "../../components/slideshow";
import { SlideshowHook } from "./hooks/slideshowHook";
import { ProcessCard } from "../../components/processCard";
import { EmailSubscription } from "../../components/emailSubscription";
import { BigButton } from "../../components/bigButton";

const textProps = {
  color: "white",
  fontFamily: "Intern",
  fontWeight: "bold",
  fontSize: { base: "1.65rem" },
  textAlign: "center",
};

export const Landing = () => {
  const slideshowObj = SlideshowHook();
  return (
    <Box position={"relative"}>
      <NavbarMobile />
      <Center
        background={`no-repeat center/cover url(${landingBannerImg})`}
        height={"100vh"}
      >
        <Stack alignItems={"center"} spacing={{ base: ".5rem", md: "1rem" }}>
          <Text {...textProps}>We Buy Your Bikes</Text>
          <Text
            {...textProps}
            fontSize={{ base: "1.28rem" }}
            fontWeight={"semibold"}
          >
            New or used. It has value to us.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} columnGap={".5rem"}>
            <Button bg={"black"} color={"white"} border={"solid white .1rem"}>
              Sell a bike
            </Button>
            <Button border={"solid black .1rem"}>Buy a bike</Button>
          </Stack>
        </Stack>
      </Center>
      <Flex direction={"column"} justifyContent={"center"}>
        <Text {...textProps} marginTop={"1.5rem"} color={"black"}>
          Find a bike for yourself
        </Text>
        {<Slideshow slides={slideshowObj?.bikes} />}
        <Center>
          {" "}
          <BigButton label={"Explore the inventory"} />
        </Center>
      </Flex>
      <Box
        bg={"nayaPedalsColor.midGrey"}
        padding={"1.25rem"}
        marginTop={"1.25rem"}
      >
        <Text {...textProps} color={"black"}>
          Quick and easy process
        </Text>
        <Flex
          direction={{ base: "column", lg: "row" }}
          justifyContent={{ lg: "center" }}
          rowGap={".75rem"}
          columnGap={{ base: ".75rem", xl: "2rem" }}
          marginTop={"1.25rem"}
        >
          {slideshowObj.processCard.map((card) => (
            <ProcessCard number={card.number} description={card.description} />
          ))}
        </Flex>
      </Box>
      <EmailSubscription />
    </Box>
  );
};
