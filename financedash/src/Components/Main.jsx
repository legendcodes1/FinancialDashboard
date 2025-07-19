import { useAppContext } from "../Context/AppContext";
import Investments from "../Pages/Investments";
import React from "react";
import Header from "./Header";
import Spending from "../Pages/Spending";
// import Spending, Retirement, etc. here

export default function MainContent() {
  const { activeTab } = useAppContext();

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <Header />
      {activeTab === "dashboard" && <p>Dashboard Content Here</p>}
      {activeTab === "investments" && <Investments />}
      {activeTab === "spending" && <Spending />}
      {/* Add more conditionals here */}
    </main>
  );
}
