import { useState, useEffect } from "react";
// type
type useMobileType = {
  limit: number;
};

export default function useMobile({ limit }: useMobileType) {
  const [isMobile, setMobileBool] = useState(false);

  const updateDimensions = () => {
    setMobileBool(window.innerWidth < limit);
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return isMobile;
}
