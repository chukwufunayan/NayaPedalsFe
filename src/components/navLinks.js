import { Flex, Link } from "@chakra-ui/react";

const linkProps = {
  fontSize: "md",
  fontWeight: "semibold",
  fontFamily: "Inter",
  color: ["black", null, "white"],
};
const flexContainerProps = {
  direction: ["column", null, "row"],
  rowGap: [".25rem"],
  columnGap: ["1.5rem"],
  justifyContent: ["normal", null, "space-evenly"],
};

const CustomLinkComponent = ({ children }) => {
  return <Link {...linkProps}>{children}</Link>;
};

export const NavLinks = () => {
  {
    /* todo: update links add 'as' prop tp use react router component for internal routing*/
  }
  return (
    <Flex {...flexContainerProps}>
      <CustomLinkComponent>Home</CustomLinkComponent>
      <CustomLinkComponent>Sell a bike</CustomLinkComponent>
      <CustomLinkComponent>Buy a bike</CustomLinkComponent>
    </Flex>
  );
};
