import React from "react";
import {
  Flex,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLinks } from "./navLinks";
import { LogoBtn } from "./logoBtn";

const iconBtnProps = {
  color: "white",
  bg: "transparent",
  size: "lg",
};

const renderIcon = (isOpen) =>
  isOpen ? <CloseIcon /> : <HamburgerIcon boxSize={6} />;

export const NavbarMobile = ({ links }) => {
  const initRef = React.useRef();
  return (
    <Flex
      bg={"transparent"}
      justifyContent={"space-between"}
      position={"absolute"}
      width={"100%"}
    >
      <LogoBtn />
      <Popover
        closeOnBlur={false}
        placement="bottom-end"
        initialFocusRef={initRef}
      >
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <IconButton {...iconBtnProps} icon={renderIcon(isOpen)} />
            </PopoverTrigger>
            <PopoverContent width={"fit-content"}>
              <PopoverBody width={"fit-content"}>
                <NavLinks />
              </PopoverBody>
            </PopoverContent>
          </>
        )}
      </Popover>
    </Flex>
  );
};
