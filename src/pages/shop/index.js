import { TagSlider, FilterMenu, FilterPanel } from "../../components/shop";
import { BikeCard } from "../../components/bikeCard";
import { Box, Divider, Flex } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { ShopHook } from "./shopHook";

export const Shop = () => {
  const {
    bikeCardValues,
    bikeCards,
    filterMap,
    filterKeys,
    isMenuHidden,
    updateIsHidden,
    selectedFilter,
    selectedValues,
    dispatchSelectedValues,
    selectedValuesArray,
  } = ShopHook();
  return (
    <>
      <TagSlider
        filterKeys={filterKeys}
        selectedValues={selectedValuesArray}
        dispatchSelectedValues={dispatchSelectedValues}
      />
      <Divider orientation="horizontal" width={"100%"} borderWidth={"1px"} />
      <Flex
        justifyContent={{ base: "center", lg: "flex-start" }}
        direction={{ base: isMenuHidden ? "row" : "column-reverse", lg: "row" }}
      >
        <Box
          display={{ base: isMenuHidden ? "none" : "block", lg: "block" }}
          width={{ base: "100%", lg: "25%" }}
          maxW={{ lg: "470px" }}
          paddingTop={{ base: isMenuHidden ? "0rem" : "1.25rem", lg: "0rem" }}
        >
          <FilterMenu
            filterMap={filterMap}
            filterKeys={filterKeys}
            selectedValues={selectedValues}
            dispatchSelectedValues={dispatchSelectedValues}
          />
        </Box>
        <Box>
          <FilterPanel
            searchResultTotal={300}
            menuToggleFunction={updateIsHidden}
            isMenuHidden={isMenuHidden}
            dispatchSelectedValues={dispatchSelectedValues}
          />
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(3, 3fr)",
            }}
            display={{ base: isMenuHidden ? "grid" : "none", lg: "grid" }}
          >
            {bikeCards?.length > 0 &&
              bikeCards.map((value, index) => (
                <GridItem key={`bike-${value}`}>
                  {" "}
                  <BikeCard {...value} />
                </GridItem>
              ))}
          </Grid>
        </Box>
      </Flex>
    </>
  );
};
