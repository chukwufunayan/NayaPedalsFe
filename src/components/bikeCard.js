import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Stack,
  Box,
  Flex,
} from "@chakra-ui/react";

const textProps = {
  fontSize: "md",
  fontWeight: "semibold",
  fontFamily: "Inter",
  color: "nayaPedalsColor.midGrey",
  noOfLines: 1,
};
const textPropsBikeType = {
  fontSize: "lg",
  fontWeight: "semibold",
  fontFamily: "Inter",
  color: "black",
  noOfLines: 1,
};

const CustomTextComponent = ({ children }) => (
  <Text {...textProps}>{children}</Text>
);

export const BikeCard = (bikeProp) => {
  const { image, year, size, driveTrain, brand, model, type, price } = bikeProp;
  return (
    <Flex justifyContent={"center"}>
      <Box width={"350px"} padding={{ base: "1.25rem" }}>
        <Card
          variant={"elevated"}
          size={{ base: "sm", md: "md" }}
          width={"100%"}
        >
          <CardBody>
            <Box height={{ base: "250px", md: "220px" }}>
              {" "}
              <Image
                src={image}
                width={"100%"}
                height={"100%"}
                objectFit="fill"
                alt={"bikeImg"}
                borderRadius={4}
              />
            </Box>
            <Stack spacing={".5rem"}>
              <Stack direction={"row"} spacing={"1rem"}>
                <CustomTextComponent>{year}</CustomTextComponent>
                <CustomTextComponent>{size}</CustomTextComponent>
                <CustomTextComponent>{driveTrain}</CustomTextComponent>
              </Stack>
              <Stack spacing={".5rem"}>
                <Text {...textPropsBikeType}>{brand}</Text>
                <Text {...textPropsBikeType}>{model}</Text>
              </Stack>
            </Stack>
          </CardBody>
          <CardFooter justifyContent={"space-between"}>
            <Text fontWeight={"semibold"}>{type}</Text>
            <Text color={"nayaPedalsColor.red"} fontWeight={"semibold"}>
              $ {price}
            </Text>
          </CardFooter>
        </Card>
      </Box>
    </Flex>
  );
};
