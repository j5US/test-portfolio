import { useState, useEffect } from "react";

function useWindowWidth() {
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handleResize = () => {
        setWidth(Math.min(window.innerWidth, 1200));
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default useWindowWidth;