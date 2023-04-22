import { LogoBtn } from "./logoBtn";
import { NavLinks } from "./navLinks";
import { Flex } from "@chakra-ui/react";

export const NavbarDesktop = () => {
  return (
    <Flex
      alignItems={["normal", null, "center"]}
      justifyContent={"space-between"}
    >
      <LogoBtn />
      <NavLinks />
    </Flex>
  );
};
