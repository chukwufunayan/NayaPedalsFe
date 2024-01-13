import { Box, Flex, IconButton } from "@chakra-ui/react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";

export const FilterPanel = ({
  searchResultTotal,
  menuToggleFunction,
  isMenuHidden,
  dispatchSelectedValues,
}) => {
  return (
    <Flex
      alignItems={"center"}
      justify={{ base: "space-between" }}
      padding={{
        base: ".5rem 1rem",
        //base: "1.5rem 1rem 0rem 1rem",
        //lg: "1.5rem 1.5rem 0rem 1.5rem",
      }}
      columnGap={"1.5rem"}
    >
      <Box as={"span"} fontWeight={"semibold"}>
        {searchResultTotal} Results
      </Box>
      <Flex alignItems={"center"} columnGap={"1.5rem"}>
        <Box
          as={"span"}
          cursor={"pointer"}
          textDecoration={"underline"}
          textUnderlineOffset={"4px"}
          onClick={() =>
            dispatchSelectedValues({
              type: "CLEAR_SELECTIONS",
              payload: {},
            })
          }
        >
          Clear Filter
        </Box>
        {isMenuHidden ? (
          <IconButton
            icon={<SearchIcon />}
            onClick={() => menuToggleFunction((currentState) => !currentState)}
            aria-label={"openBtn"}
          />
        ) : (
          <IconButton
            aria-label={"closeBtn"}
            icon={
              <CloseIcon
                onClick={() =>
                  menuToggleFunction((currentState) => !currentState)
                }
              />
            }
          />
        )}
      </Flex>
    </Flex>
  );
};
