import { useEffect, useMemo, useReducer, useState } from "react";
import {
  selectReducer,
  setFilter,
  defaultSelectedFiltersMap,
  flattenMap,
  filterKeysArray,
} from "./util";
import qs from "qs";
import axios from "axios";

export const ShopHook = () => {
  const [isMenuHidden, updateIsHidden] = useState(true);
  const [filterMap, setFilterMap] = useState();
  const [bikeCards, setBikeCards] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  const [selectedValues, dispatchSelectedValues] = useReducer(
    selectReducer,
    defaultSelectedFiltersMap
  );
  const selectedValuesArray = useMemo(
    () => Array.from(selectedValues?.values() || []),
    [selectedValues]
  );

  useEffect(() => {
    const filterResponses = filterKeysArray.map((filterKey) => {
      return axios.get(`${process.env.REACT_APP_LOCAL_API_URL}/${filterKey}s`);
    });
    Promise.all(filterResponses).then(setFilter(setFilterMap));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
    }
    let bikeUrl = `${process.env.REACT_APP_LOCAL_API_URL}/bikes`;
    const flatFilterObject = flattenMap(selectedValues);
    const numberOfFilteredKeys = Object.keys(flatFilterObject).length;
    if (numberOfFilteredKeys > 0) {
      const queryString = qs.stringify(
        { filter: flatFilterObject },
        { encode: false }
      );
      bikeUrl += `?${queryString}`;
    }
    axios.get(bikeUrl).then((data) => {
      const { data: responseData } = data;
      setBikeCards(responseData);
      setIsLoading(false);
    });
  }, [selectedValues]);

  return {
    bikeCards,
    filterMap,
    filterKeysArray,
    isMenuHidden,
    updateIsHidden,
    selectedValues,
    dispatchSelectedValues,
    selectedValuesArray,
    isLoading,
  };
};
