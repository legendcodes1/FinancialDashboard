import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Shield,
  CreditCard,
  TrendingUp,
  Lock,
  User,
  Mail,
  Home,
  BarChart3,
} from "lucide-react";
export default function () {
  const [activeTab, setActiveTab] = useState("dashboard");
  const stocks = [
    { id: "SPY", label: "SPY", icon: Home, price: 2500 },
    { id: "SP & 500", label: "SP & 500", icon: TrendingUp, price: 1700 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
      {/* Chart Card */}
      <div className="lg:col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">
            Portfolio Performance
          </h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium hover:bg-blue-500/30 transition-colors">
              7D
            </button>
            <button className="px-4 py-2 bg-white/10 text-white/70 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
              30D
            </button>
            <button className="px-4 py-2 bg-white/10 text-white/70 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
              1Y
            </button>
          </div>
        </div>
        <div className="h-64 flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <p className="text-white/70">Chart visualization would go here</p>
            <p className="text-white/50 text-sm">
              Integration with your preferred charting library
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
