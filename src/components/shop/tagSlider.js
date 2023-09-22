import { Tag, Flex, TagLabel, TagCloseButton, Box } from "@chakra-ui/react";

export const TagSlider = ({
  selectedValues,
  filterKeys,
  dispatchSelectedValues,
}) => {
  // console.log("selectedValueses", selectedValues);
  return (
    <Box overflowX={"scroll"} padding={"1rem .5rem"}>
      <Flex width={"max-content"} columnGap={"1rem"}>
        {selectedValues &&
          selectedValues.map((valueArray, filterKey) => {
            // console.log(filterKey);
            return valueArray.map((tag, index) => (
              <Tag padding={".5rem"} key={`${filterKey}-${tag.label}`}>
                <TagLabel>{tag.label}</TagLabel>
                <TagCloseButton
                  onClick={() =>
                    dispatchSelectedValues({
                      type: "TAG_REMOVE_SELECTION",
                      payload: {
                        key: filterKeys[filterKey],
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
