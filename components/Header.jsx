import React from "react";
import {
  BarChart3,
  TrendingUp,
  Wallet,
  Shield,
  Bell,
  Settings,
  User,
  LogOut,
  Target,
  CreditCard,
  Plus,
  ArrowUp,
  ArrowDown,
  Home,
  Search,
} from "lucide-react";
import { useState } from "react";
export default function Header() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Main Dashboard", icon: Home },
    { id: "investments", label: "Investments", icon: TrendingUp },
    { id: "spending", label: "Spending", icon: CreditCard },
    { id: "retirement", label: "Retirement Plan", icon: Target },
  ];

  return (
    <header className="bg-white/5 backdrop-blur-xl border-b border-white/10 p-6 mb-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            {menuItems.find((item) => item.id === activeTab)?.label ||
              "Dashboard"}
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>
          <button className="relative p-2 text-white/70 hover:text-white transition-colors">
            <Bell className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </button>
          <button className="p-2 text-white/70 hover:text-white transition-colors">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
