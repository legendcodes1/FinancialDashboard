"use client";

import { useState } from "react";
import React from "react";
import {
  TrendingUp,
  Target,
  Plus,
  ArrowUp,
  ArrowDown,
  Search,
  Calendar,
  TrendingDown,
  Eye,
  EyeOff,
} from "lucide-react";
import TransactionModal from "@/components/TransactionModal";
export default function Spending() {
  const [modal, setModal] = useState(false);
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [filterType, setFilterType] = useState("all");

  const recentTransactions = [
    {
      name: "Salary Deposit",
      amount: "+$4,250.00",
      date: "Today",
      type: "income",
      category: "salary",
      icon: "💰",
    },
    {
      name: "Grocery Store",
      amount: "-$127.50",
      date: "Yesterday",
      type: "expense",
      category: "food",
      icon: "🛒",
    },
    {
      name: "Investment Return",
      amount: "+$89.25",
      date: "2 days ago",
      type: "income",
      category: "investment",
      icon: "📈",
    },
    {
      name: "Utilities",
      amount: "-$245.80",
      date: "3 days ago",
      type: "expense",
      category: "utilities",
      icon: "⚡",
    },
    {
      name: "Restaurant",
      amount: "-$67.30",
      date: "3 days ago",
      type: "expense",
      category: "food",
      icon: "🍽️",
    },
  ];

  const filteredTransactions = recentTransactions.filter((transaction) => {
    if (filterType === "all") return true;
    return transaction.type === filterType;
  });

  const totalIncome = recentTransactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + parseFloat(t.amount.replace(/[+$,]/g, "")), 0);

  const totalExpenses = recentTransactions
    .filter((t) => t.type === "expense")
    .reduce(
      (sum, t) => sum + Math.abs(parseFloat(t.amount.replace(/[-$,]/g, ""))),
      0
    );

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        {/* Balance Card */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium mb-2">
                Total Balance
              </p>
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-bold text-white">
                  {balanceVisible ? "$10,000.00" : "••••••"}
                </h1>
                <button
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  {balanceVisible ? (
                    <Eye className="w-5 h-5 text-white" />
                  ) : (
                    <EyeOff className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            </div>
            <button
              onClick={openModal}
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-4 text-white font-semibold hover:bg-white/30 transition-all flex items-center gap-2 shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Add Transaction
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-white font-semibold">Income</h3>
            </div>
            <p className="text-2xl font-bold text-green-400">
              ${totalIncome.toLocaleString()}
            </p>
            <p className="text-green-300 text-sm">This month</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-white font-semibold">Expenses</h3>
            </div>
            <p className="text-2xl font-bold text-red-400">
              -${totalExpenses.toLocaleString()}
            </p>
            <p className="text-red-300 text-sm">This month</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold">Net Flow</h3>
            </div>
            <p
              className={`text-2xl font-bold ${
                totalIncome - totalExpenses > 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              ${(totalIncome - totalExpenses).toLocaleString()}
            </p>
            <p className="text-white/60 text-sm">This month</p>
          </div>
        </div>

        {/* Transactions Section */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">
              Recent Transactions
            </h3>
            <div className="flex items-center gap-4">
              {/* Filter Buttons */}
              <div className="flex bg-white/10 rounded-xl p-1">
                <button
                  onClick={() => setFilterType("all")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filterType === "all"
                      ? "bg-white/20 text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilterType("income")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filterType === "income"
                      ? "bg-green-500/20 text-green-400"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Income
                </button>
                <button
                  onClick={() => setFilterType("expense")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filterType === "expense"
                      ? "bg-red-500/20 text-red-400"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  Expenses
                </button>
              </div>
              <button className="text-blue-300 hover:text-blue-200 text-sm font-medium flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/5 transition-all">
                <Calendar className="w-4 h-4" />
                View All
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {filteredTransactions.map((transaction, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10 cursor-pointer"
              >
                <div className="text-2xl">{transaction.icon}</div>
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    transaction.type === "income"
                      ? "bg-green-500/20 text-green-400 group-hover:bg-green-500/30"
                      : "bg-red-500/20 text-red-400 group-hover:bg-red-500/30"
                  } transition-colors`}
                >
                  {transaction.type === "income" ? (
                    <ArrowUp className="w-6 h-6" />
                  ) : (
                    <ArrowDown className="w-6 h-6" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-base group-hover:text-white/90">
                    {transaction.name}
                  </p>
                  <p className="text-white/50 text-sm capitalize">
                    {transaction.category} • {transaction.date}
                  </p>
                </div>
                <div className="text-right">
                  <p
                    className={`font-bold text-lg ${
                      transaction.type === "income"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {transaction.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white/40" />
              </div>
              <p className="text-white/60">
                No transactions found for the selected filter
              </p>
            </div>
          )}
        </div>
      </div>

      <TransactionModal isOpen={modal} closeModal={closeModal} />
    </div>
  );
}
