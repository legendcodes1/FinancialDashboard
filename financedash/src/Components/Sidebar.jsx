import { useAppContext } from "../Context/AppContext";
import { Home, TrendingUp, CreditCard, Target } from "lucide-react";
import React from "react";

const menuItems = [
  { id: "dashboard", label: "Main Dashboard", icon: Home },
  { id: "investments", label: "Investments", icon: TrendingUp },
  { id: "spending", label: "Spending", icon: CreditCard },
  { id: "retirement", label: "Retirement Plan", icon: Target },
];

export default function Sidebar() {
  const { activeTab, setActiveTab } = useAppContext();

  return (
    <aside className="w-64 bg-white/10 p-6">
      <ul className="space-y-4 mt-10">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <button
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === id ? "bg-blue-600 text-white" : "text-white/70"
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
