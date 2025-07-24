"use client";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { AppProvider } from "../../context/AppContext";

export default function DashboardLayout({ children }) {
  return (
    <AppProvider>
      <div className="flex h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </AppProvider>
  );
}
