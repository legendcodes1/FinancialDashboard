"use client";

import { createContext, useContext, useState } from "react";
import React from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [theme, setTheme] = useState("dark");

  return (
    <AppContext.Provider value={{ activeTab, setActiveTab, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
