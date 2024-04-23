import React, { createContext, useContext, useEffect, useState } from "react";

const BreakpointContext = createContext({
  breakpoints: {
    up: () => false,
    down: () => false,
  },
});

const gridBreakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
};

const BreakpointsProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const [breakpoints, setBreakpoints] = useState({
    up: (bp) => width >= gridBreakpoints[bp],
    down: (bp) => width <= gridBreakpoints[bp],
  });

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    setBreakpoints({
      up: (bp) => width >= gridBreakpoints[bp],
      down: (bp) => width <= gridBreakpoints[bp],
    });
  }, [width]);

  return (
    <BreakpointContext.Provider value={{ breakpoints }}>
      {children}
    </BreakpointContext.Provider>
  );
};

const useBreakpoints = () => useContext(BreakpointContext);

export { BreakpointsProvider, useBreakpoints };
export default BreakpointsProvider;
