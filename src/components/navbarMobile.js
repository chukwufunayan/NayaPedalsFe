import React from "react";
import {
  Flex,
  Text,
  IconButton,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Portal,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const iconBtnProps = {
  color: "white",
  bg: "transparent",
  size: "lg",
};

const logoBtnProps = {
  color: "white",
  bg: "transparent",
  fontFamily: "Intern",
};

const renderIcon = (isOpen) => (isOpen ? <CloseIcon /> : <HamburgerIcon />);

export const NavbarMobile = ({ links }) => {
  const initRef = React.useRef();
  return (
    <Flex bg={"transparent"} justifyContent={"space-between"}>
      <Button {...logoBtnProps}>NayaPedals</Button>
      <Popover
        closeOnBlur={false}
        placement="bottom-end"
        initialFocusRef={initRef}
      >
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <IconButton
                icon={renderIcon(isOpen)}
                {...iconBtnProps}
              ></IconButton>
            </PopoverTrigger>
            <PopoverContent width={"fit-content"}>
              <PopoverBody width={"fit-content"}>
                <Box>Hello</Box>
              </PopoverBody>
            </PopoverContent>
          </>
        )}
      </Popover>
    </Flex>
  );
};
