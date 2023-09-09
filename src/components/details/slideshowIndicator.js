import { Box, Image } from "@chakra-ui/react";

export const SlideshowIndicator = ({ imageSrc }) => {
  return (
    <Box width={"150px"} height={"150px"} marginRight={".75rem"}>
      <Image src={imageSrc} width={"100%"} height={"100%"} />
    </Box>
  );
};
