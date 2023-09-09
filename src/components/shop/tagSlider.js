import { Tag, Flex, TagLabel, TagCloseButton, Box } from "@chakra-ui/react";
import { useMemo } from "react";

export const TagSlider = ({
  selectedValues,
  filterKeys,
  dispatchSelectedValues,
}) => {
  return (
    <Box overflowX={"scroll"} padding={"1rem .5rem"}>
      <Flex width={"max-content"} columnGap={"1rem"}>
        {selectedValues &&
          selectedValues.map((valueArray, key) =>
            valueArray.map((value, index) => (
              <Tag padding={".5rem"} key={`${key}-${value.label}`}>
                <TagLabel>{value.label}</TagLabel>
                <TagCloseButton
                  onClick={() =>
                    dispatchSelectedValues({
                      type: "TAG_REMOVE_SELECTION",
                      payload: {
                        key: filterKeys[key],
                        index: index,
                      },
                    })
                  }
                />
              </Tag>
            ))
          )}
      </Flex>
    </Box>
  );
};
