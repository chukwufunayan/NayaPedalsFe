import { Select } from "chakra-react-select";

export const SelectSearch = ({
  filterKey,
  selectedValues,
  options,
  dispatchSelectedValues,
}) => {
  return (
    <Select
      options={options}
      useBasicStyles
      isMulti
      closeMenuOnSelect={false}
      onChange={(newValue) =>
        dispatchSelectedValues({
          type: "SELECTION_SEARCH_UPDATE",
          payload: {
            key: filterKey,
            data: newValue,
          },
        })
      }
      value={selectedValues}
    />
  );
};
