import { Button } from "@chakra-ui/react";

const logoBtnProps = {
  color: "white",
  bg: "transparent",
  fontSize: "1.15rem",
  fontFamily: "Intern",
};

export const LogoBtn = () => {
  return <Button {...logoBtnProps}>NayaPedals</Button>;
};
