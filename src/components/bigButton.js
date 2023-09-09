import { Button } from "@chakra-ui/react";

const inventoryButtonProps = {
  fontSize: "1.28rem",
  marginTop: "1.25rem",
  bg: "black",
  color: "white",
  width: "100%",
  maxW: "480px",
};
export const BigButton = ({ label }) => {
  return <Button {...inventoryButtonProps}>{label}</Button>;
};
