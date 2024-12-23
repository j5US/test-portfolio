import { useState, useEffect } from "react";
import useWindowWidth from "./useWindowWidth";

const useResponsiveRowHeight = () => {
  const width = useWindowWidth();
  const [rowHeight, setRowHeight] = useState(130);
  const [currentBreakpoint, setCurrentBreakpoint] = useState('lg');

  useEffect(() => {
    if (width === undefined) return;

    if (width < 800) {
      setRowHeight(165);
      setCurrentBreakpoint('sm');
    } else if (width >= 800 && width < 1200) {
      setRowHeight(180);
      setCurrentBreakpoint('md');
    } else {
      setRowHeight(130);
      setCurrentBreakpoint('lg');
    }
  }, [width]);

  return { rowHeight, currentBreakpoint };
};

export default useResponsiveRowHeight;