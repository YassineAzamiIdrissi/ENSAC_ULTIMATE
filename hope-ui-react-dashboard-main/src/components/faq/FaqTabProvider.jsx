import { useState, createContext, useContext } from "react";

export const FaqTabContext = createContext({
  activeKey: "",
  setActiveKey: () => {},
  subCategoryActiveKey: "",
  setSubCategoryActiveKey: () => {},
  isOpenOfcanvas: false,
  setIsOpenOffcanvas: () => {},
});

const FaqTabProvider = ({ children }) => {
  const [activeKey, setActiveKey] = useState("all");
  const [subCategoryActiveKey, setSubCategoryActiveKey] = useState("sale-101");
  const [isOpenOfcanvas, setIsOpenOffcanvas] = useState(false);
  return (
    <FaqTabContext.Provider
      value={{
        activeKey,
        setActiveKey,
        subCategoryActiveKey,
        setSubCategoryActiveKey,
        isOpenOfcanvas,
        setIsOpenOffcanvas,
      }}
    >
      {children}
    </FaqTabContext.Provider>
  );
};

export const useFaqTabContext = () => useContext(FaqTabContext);

export default FaqTabProvider;
