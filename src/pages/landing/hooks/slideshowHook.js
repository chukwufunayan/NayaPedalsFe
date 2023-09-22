import { processCard } from "./data";
import axios from "axios";
import { useEffect, useState } from "react";

export const SlideshowHook = () => {
  const [bikes, setBikes] = useState();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_LOCAL_API_URL}/bikes`)
      .then((response) => {
        console.log("response", response.data);
        setBikes(response.data);
      });
  }, []);

  return { bikes, processCard };
};
