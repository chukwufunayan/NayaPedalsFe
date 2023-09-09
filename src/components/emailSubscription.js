import { Image, Stack, Flex, Box, Input, Button, Text } from "@chakra-ui/react";
import emailSubscriptionImg from "../resources/email-subscription-img.jpg";

const textProps = {
  fontFamily: "Intern",
  color: "white",
};
export const EmailSubscription = () => {
  return (
    <Flex direction={{ base: "column", lg: "row" }} height={"250px"}>
      <Box width={{ lg: "50%" }} height={{ base: "250px" }}>
        {" "}
        <Image
          src={emailSubscriptionImg}
          objectFit="cover"
          height={"100%"}
          width={"100%"}
          backgroundPosition={"top: 50%"}
        />
      </Box>
      <Stack
        direction={{ base: "column" }}
        spacing={4}
        padding={{ base: "1rem" }}
        bg={"nayaPedalsColor.darkGrey"}
        width={{ lg: "50%" }}
        alignItems={{ base: "center" }}
        justifyContent={"center"}
      >
        <Stack width={"fit-content"}>
          <Text {...textProps} fontWeight={"bold"} fontSize={"1.5rem"}>
            Become part of the Nayapedals community
          </Text>
          <Text {...textProps} fontSize={"1.2rem"}>
            Stay up to date with all the happenings and news!
          </Text>
          <Stack direction={"row"} spacing={"0rem"}>
            <Input
              {...textProps}
              placeholder={"email"}
              borderRight={"0px"}
              borderRightRadius={"0px"}
              _placeholder={{
                color: "white",
                fontSize: "1.1rem",
              }}
            />
            <Button bg={"white"} borderLeftRadius={"0px"}>
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
};
