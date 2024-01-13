// export const bikeCardValues = {
//   image: bikeImg,
//   year: 2023,
//   size: "M",
//   driveTrain: "Shimano X01 Di2",
//   brand: "Specialized",
//   model: "Sworks",
//   type: "Enduro",
//   price: 5000,
// };

export const filterKeysMap = { brand: "brand_id", type: "type" };
export const filterKeysArray = Object.keys(filterKeysMap);

export const defaultSelectedFiltersMap = filterKeysArray.reduce(
  (accumulator, currentValue) => accumulator.set(currentValue, []),
  new Map()
);

export const removeTag = (currentState, key, index) => {
  return currentState.get(key).splice(index, 1);
};

export const selectReducer = (state, action) => {
  const stateMap = new Map(JSON.parse(JSON.stringify(Array.from(state))));
  const { key, data, index } = action.payload;
  if (action.type === "CLEAR_SELECTIONS") return defaultSelectedFiltersMap;
  else if (action.type === "SELECTION_SEARCH_UPDATE") stateMap.set(key, data);
  else if (action.type === "TAG_REMOVE_SELECTION")
    removeTag(stateMap, key, index);
  return stateMap;
};

export const setFilter = (setFilterMap) => (filterResponses) => {
  let map = new Map();
  filterResponses.forEach((responseObject, index) => {
    const {
      data: { data: responseData },
    } = responseObject;

    const filterValues = responseData.reduce((accumulator, currentObject) => {
      const value =
        filterKeysArray[index] === "brand"
          ? currentObject.id
          : currentObject.name;
      accumulator.push({
        label: currentObject.name,
        value,
      });
      return accumulator;
    }, []);

    map.set(filterKeysArray[index], filterValues);
  });
  setFilterMap(map);
};

/*
 * { year: [ 2022 ] }
 * { year: [ 2022 ], brand_id: [ 10, 11, 12, 13 ] }
 */

export const flattenMap = (filterCategories) => {
  return filterKeysArray.reduce((accumulator, currentKey) => {
    const selectedFilters = filterCategories.get(currentKey);

    if (selectedFilters.length > 0) {
      accumulator[filterKeysMap[currentKey]] = selectedFilters.map(
        (selection) => {
          return selection.value;
        }
      );
      return accumulator;
    }

    return accumulator;
  }, {});
};
