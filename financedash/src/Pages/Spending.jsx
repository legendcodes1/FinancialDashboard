import React from "react";
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
export default function Spending() {
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
    <>
      <div className="flex justify-evenly mt-10">
        <h2 className="text-xl"> Balance : 10,000</h2>
        <button className="border rounded-md px-10 text-lg">
          Add Transaction
        </button>
      </div>
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 mt-10">
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
                <p className="text-white/60 text-xs">{transaction.date}</p>
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
    </>
  );
}
