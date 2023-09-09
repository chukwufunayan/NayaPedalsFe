import {
  Flex,
  Box,
  Grid,
  GridItem,
  Text,
  Tag,
  TagLabel,
  Stack,
} from "@chakra-ui/react";
import { AiFillEnvironment } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { DetailsTab } from "../../components/details";
import { Gallery } from "../../components/GalleryWithHorizontalCarousel/Gallery";
import {
  images,
  products,
} from "../../components/GalleryWithHorizontalCarousel/_data";

export const Details = () => {
  return (
    <Box>
      <Flex
        direction={{ base: "column" }}
        alignItems={"center"}
        rowGap={"1rem"}
      >
        <Text fontSize={{ base: "1.65rem" }} fontWeight={"bold"}>
          Stumpjumper evo
        </Text>
        <Stack
          direction={{ base: "column" }}
          fontFamily={"Inter"}
          fontSize={{ base: "1.15rem" }}
          fontWeight={"semibold"}
        >
          <Stack direction={"row"} justify={"center"}>
            <span>This item is</span>
            <Tag
              color={"white"}
              fontSize={{ base: ".85rem" }}
              fontWeight={"bold"}
              borderRadius={"full"}
              bg={"nayaPedalsColor.red"}
            >
              <TagLabel padding={".25rem"}>Verified</TagLabel>
            </Tag>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }}>
            {" "}
            <Stack direction={"row"} align={"center"} fontSize={"1.15rem"}>
              <AiFillEnvironment /> <span>Atlanta, Ga</span>
            </Stack>
            <Stack direction={"row"} align={"center"} fontSize={"1.15rem"}>
              <FaShippingFast />
              <span>Atlanta, Ga</span>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
      <Flex
        direction={{ base: "column", lg: "row" }}
        columnGap={"1rem"}
        rowGap={"1rem"}
      >
        <Box padding={{ base: ".5rem", lg: 0 }} flex={"1"}>
          <Gallery images={images} />
        </Box>
        <Grid
          templateColumns={"repeat(2, 1fr)"}
          bg={"orange"}
          borderRadius={"10px"}
          flex={"1"}
        >
          {[
            { label: "Year", value: 2022 },
            { label: "Color", value: "Orange" },
            { label: "Condition", value: "Excellent" },
            { label: "Size", value: "M" },
            { label: "Frame Material", value: "Carbon" },
            { label: "Group Set", value: "SRAM" },
          ].map((detailObject, index) => (
            <GridItem
              colSpan={1}
              width={"100%"}
              padding={"1rem"}
              border={"black solid"}
              className={"product-detail-box-item"}
            >
              <Flex
                direction={{ base: "column" }}
                alignItems={"center"}
                rowGap={".5rem"}
              >
                <Text
                  fontWeight={"semibold"}
                  fontSize={"1.1rem"}
                  fontFamily={"Inter"}
                  textAlign={"center"}
                >
                  {detailObject.label}
                </Text>
                <Text
                  fontWeight={"semibold"}
                  fontSize={{ base: "1.25rem" }}
                  fontFamily={"Inter"}
                >
                  {detailObject.value}
                </Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Flex>
      <DetailsTab />
    </Box>
  );
};
