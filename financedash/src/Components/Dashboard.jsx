import React, { useState } from "react";
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Wallet,
  Shield,
  Bell,
  Settings,
  User,
  LogOut,
  DollarSign,
  Target,
  CreditCard,
  Plus,
  ArrowUp,
  ArrowDown,
  Home,
  Search,
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Main Dashboard", icon: Home },
    { id: "investments", label: "Investments", icon: TrendingUp },
    { id: "spending", label: "Spending", icon: CreditCard },
    { id: "retirement", label: "Retirement Plan", icon: Target },
  ];

  const quickStats = [
    {
      title: "Total Balance",
      value: "$24,680.50",
      change: "+12.5%",
      isPositive: true,
      icon: Wallet,
    },
    {
      title: "Monthly Spending",
      value: "$3,247.20",
      change: "-8.2%",
      isPositive: false,
      icon: CreditCard,
    },
    {
      title: "Investments",
      value: "$18,920.75",
      change: "+15.3%",
      isPositive: true,
      icon: TrendingUp,
    },
    {
      title: "Savings Goal",
      value: "68%",
      change: "+5.1%",
      isPositive: true,
      icon: Target,
    },
  ];

  const recentTransactions = [
    {
      name: "Salary Deposit",
      amount: "+$4,250.00",
      date: "Today",
      type: "income",
    },
    {
      name: "Grocery Store",
      amount: "-$127.50",
      date: "Yesterday",
      type: "expense",
    },
    {
      name: "Investment Return",
      amount: "+$89.25",
      date: "2 days ago",
      type: "income",
    },
    {
      name: "Utilities",
      amount: "-$245.80",
      date: "3 days ago",
      type: "expense",
    },
    {
      name: "Restaurant",
      amount: "-$67.30",
      date: "3 days ago",
      type: "expense",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="flex h-screen relative z-10">
        {/* Sidebar */}
        <aside className="w-64 bg-white/10 backdrop-blur-xl border-r border-white/20 flex flex-col">
          {/* Logo Section */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">FinanceHub</h1>
                <p className="text-blue-200 text-sm">Dashboard</p>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                        activeTab === item.id
                          ? "bg-white/20 text-white shadow-lg"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Profile Section */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">John Doe</p>
                <p className="text-white/60 text-sm">Premium Member</p>
              </div>
              <LogOut className="w-5 h-5 text-white/60 hover:text-white" />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Top Header */}
          <header className="bg-white/5 backdrop-blur-xl border-b border-white/10 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {menuItems.find((item) => item.id === activeTab)?.label ||
                    "Dashboard"}
                </h2>
                <p className="text-white/60">Welcome back, John!</p>
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

          {/* Dashboard Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white/70 text-sm font-medium">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-white">
                          {stat.value}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          {stat.isPositive ? (
                            <ArrowUp className="w-4 h-4 text-green-400" />
                          ) : (
                            <ArrowDown className="w-4 h-4 text-red-400" />
                          )}
                          <span
                            className={`text-sm font-medium ${
                              stat.isPositive
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {stat.change}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Charts and Transactions Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                    <p className="text-white/70">
                      Chart visualization would go here
                    </p>
                    <p className="text-white/50 text-sm">
                      Integration with your preferred charting library
                    </p>
                  </div>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">
                    Recent Transactions
                  </h3>
                  <button className="text-blue-300 hover:text-blue-200 text-sm font-medium">
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          transaction.type === "income"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {transaction.type === "income" ? (
                          <ArrowUp className="w-5 h-5" />
                        ) : (
                          <ArrowDown className="w-5 h-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm">
                          {transaction.name}
                        </p>
                        <p className="text-white/60 text-xs">
                          {transaction.date}
                        </p>
                      </div>
                      <p
                        className={`font-semibold ${
                          transaction.type === "income"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {transaction.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Plus className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/80 font-medium">Add Money</span>
                </button>
                <button className="flex flex-col items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/80 font-medium">Invest</span>
                </button>
                <button className="flex flex-col items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/80 font-medium">Pay Bills</span>
                </button>
                <button className="flex flex-col items-center gap-3 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/80 font-medium">Set Goals</span>
                </button>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-400" />
                <p className="text-white/80 text-sm">
                  Your account is secured with bank-level 256-bit SSL
                  encryption. Last login: Today at 9:15 AM
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
