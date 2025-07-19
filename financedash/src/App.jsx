import { useState } from "react";
import "./index.css"; // or './App.css' if that's where Tailwind is configured
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./Context/AppContext";
import DashboardLayout from "./Pages/Dashboardlayout";
function App() {
  return (
    <AppProvider>
      <DashboardLayout />
    </AppProvider>
  );
}

export default App;
