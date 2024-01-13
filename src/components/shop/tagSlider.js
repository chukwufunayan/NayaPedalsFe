import { Tag, Flex, TagLabel, TagCloseButton, Box } from "@chakra-ui/react";

export const TagSlider = ({
  selectedValuesArray,
  filterKeysArray,
  dispatchSelectedValues,
}) => {
  return (
    <Box overflowX={"scroll"} padding={"1rem .5rem"}>
      <Flex width={"max-content"} columnGap={"1rem"}>
        {selectedValuesArray &&
          selectedValuesArray.map((valueArray, filterKey) => {
            return valueArray.map((tag, index) => (
              <Tag padding={".5rem"} key={`${filterKey}-${tag.label}`}>
                <TagLabel>{tag.label}</TagLabel>
                <TagCloseButton
                  onClick={() =>
                    dispatchSelectedValues({
                      type: "TAG_REMOVE_SELECTION",
                      payload: {
                        key: filterKeysArray[filterKey],
                        index: index,
                      },
                    })
                  }
                />
              </Tag>
            ));
          })}
      </Flex>
    </Box>
  );
};
