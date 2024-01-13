import { TagSlider, FilterMenu, FilterPanel } from "../../components/shop";
import { BikeCard } from "../../components/bikeCard";
import { Box, Divider, Flex, Grid, GridItem, Spinner } from "@chakra-ui/react";
import { ShopHook } from "./shopHook";

export const Shop = () => {
  const {
    bikeCards,
    filterMap,
    filterKeysArray,
    isMenuHidden,
    updateIsHidden,
    selectedValues,
    dispatchSelectedValues,
    selectedValuesArray,
    isLoading,
  } = ShopHook();
  return (
    <>
      <TagSlider
        filterKeysArray={filterKeysArray}
        selectedValuesArray={selectedValuesArray}
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
            filterKeysArray={filterKeysArray}
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
          {isLoading ? (
            <Flex justifyContent={"center"} padding={"1rem"}>
              {" "}
              <Spinner />
            </Flex>
          ) : (
            bikeCards.length > 0 && (
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                  xl: "repeat(3, 3fr)",
                }}
                display={{ base: isMenuHidden ? "grid" : "none", lg: "grid" }}
              >
                {bikeCards?.map((value, index) => (
                  <GridItem key={`bike-${value}`}>
                    {" "}
                    <BikeCard {...value} />
                  </GridItem>
                ))}
              </Grid>
            )
          )}
        </Box>
      </Flex>
    </>
  );
};
