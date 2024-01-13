import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
} from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";
import { SelectSearch } from "./index";

export const FilterMenu = ({
  filterKeysArray,
  filterMap,
  dispatchSelectedValues,
  selectedValues,
}) => {
  return (
    <Box>
      <Accordion allowToggle allowMultiple>
        {filterKeysArray?.map((key, index) => (
          <AccordionItem key={`${key}-${index}`}>
            {({ isExpanded }) => (
              <>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {key}
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize="12px" />
                  ) : (
                    <AccordionIcon />
                  )}
                </AccordionButton>
                {isExpanded && (
                  <AccordionPanel pb={4}>
                    <SelectSearch
                      options={filterMap?.get(key)}
                      selectedValues={selectedValues?.get(key)}
                      dispatchSelectedValues={dispatchSelectedValues}
                      filterKey={key}
                    />
                  </AccordionPanel>
                )}
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
      {/*<Flex*/}
      {/*  width={"100vw"}*/}
      {/*  bottom={"0px"}*/}
      {/*  justifyContent={"center"}*/}
      {/*  boxSizing={"border-box"}*/}
      {/*  position={"fixed"}*/}
      {/*>*/}
      {/*  {" "}*/}
      {/*  <BigButton label={"Search"} />*/}
      {/*</Flex>*/}
    </Box>
  );
};
