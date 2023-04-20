import { Card, CardBody, CardHeader, Circle, Text } from "@chakra-ui/react";

const textPropsHeader = {
  fontFamily: "Inter",
  fontWeight: "bold",
  size: "3rem",
  bg: "nayaPedalsColor.midGrey",
  fontSize: "2xl",
};
const textPropsBody = {
  fontFamily: "Inter",
  fontWeight: "medium",
  color: "nayaPedalsColor.lightGrey",
  fontSize: "xl",
};

export const ProcessCard = ({ number, description }) => {
  return (
    <Card bg={"nayaPedalsColor.darkGrey"}>
      <CardHeader paddingBottom={"0rem"}>
        <Circle {...textPropsHeader}>
          <Text>{number}</Text>
        </Circle>
      </CardHeader>
      <CardBody>
        <Text {...textPropsBody}>{description}</Text>
      </CardBody>
    </Card>
  );
};
{
}
