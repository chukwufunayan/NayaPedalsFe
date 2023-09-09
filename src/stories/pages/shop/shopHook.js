import { useCallback, useMemo, useReducer, useState } from "react";
import bikeImg from "../../../resources/stumpjumper pro.webp";
import qs from "qs";
import axios from "axios";

let filterMap = new Map();
filterMap.set("brand", [
  { label: "Giant", value: "Giant" },
  { label: "Trek", value: "Trek" },
  { label: "Specialized", value: "Specialized" },
]);
filterMap.set("type", [
  { label: "Road", value: "Road" },
  { label: "Mtn", value: "Mtn" },
  { label: "Gravel", value: "Gravel" },
]);
filterMap.set("size", [
  { label: "S", value: "S" },
  { label: "M", value: "M" },
]);
const bikeCardValues = {
  image: bikeImg,
  year: 2023,
  size: "M",
  driveTrain: "Shimano X01 Di2",
  brand: "Specialized",
  model: "Sworks",
  type: "Enduro",
  price: 5000,
};

export const ShopHook = () => {
  const filterKeys = useMemo(() => Array.from(filterMap.keys()), []);

  const map = useMemo(() => {
    const map = new Map();
    for (const key of filterKeys) {
      map.set(key, []);
    }
    return map;
  }, []);

  const [isMenuHidden, updateIsHidden] = useState(true);

  const spliceArrayFunction = useCallback((currentState, key, index) => {
    return currentState.get(key).splice(index, 1);
  }, []);

  const selectReducer = (state, action) => {
    const tempMapState = new Map(JSON.parse(JSON.stringify(Array.from(state))));
    const { key, data, index } = action.payload;
    if (action.type === "CLEAR_SELECTIONS") return map;
    else if (action.type === "SELECTION_SEARCH_UPDATE") {
      tempMapState.set(key, data);
    } else if (action.type === "TAG_REMOVE_SELECTION")
      spliceArrayFunction(tempMapState, key, index);
    return tempMapState;
  };

  const [selectedValues, dispatchSelectedValues] = useReducer(
    selectReducer,
    map
  );
  const selectedValuesArray = useMemo(
    () => Array.from(selectedValues?.values() || []),
    [selectedValues]
  );
  return {
    bikeCardValues,
    filterMap,
    filterKeys,
    isMenuHidden,
    updateIsHidden,
    map,
    selectedValues,
    dispatchSelectedValues,
    selectedValuesArray,
  };
};
