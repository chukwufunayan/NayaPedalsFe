import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Text,
  Stack,
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

export const BikeCard = ({
  image,
  year,
  size,
  driveTrain,
  brand,
  model,
  type,
  price,
}) => {
  return (
    <Card variant={"elevated"} size={"sm"}>
      <CardBody>
        <Image src={image} alt={"bikeImg"} borderRadius={4} />
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
  );
};
