import React, { createContext, useContext, useState } from "react";

// Créer le contexte
const SidebarContext = createContext();

// Fournisseur de contexte
export const SidebarProvider = ({ children }) => {
  const [Expand, setExpand] = useState(true);

  const onExpand = () => setExpand((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ Expand, onExpand }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useSideBar = () => useContext(SidebarContext);