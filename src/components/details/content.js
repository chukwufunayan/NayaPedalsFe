import { useEffect } from "react";

export const Content = ({ tabNum }) => {
  useEffect(() => {
    console.log(`tab num ${tabNum} mounted`);
    return () => {
      console.log(`tab num ${tabNum} un-mounted`);
    };
  });
  return `content ${tabNum}`;
};
