"use client";

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
  Filter,
  Calendar,
  TrendingDown,
  Eye,
  EyeOff,
} from "lucide-react";

// Enhanced Transaction Modal Component
export default function TransactionModal({ isOpen, closeModal }) {
  const [items, setItems] = useState({
    Name: "",
    Time: "",
    Cost: "",
    Type: "expense",
    Category: "general",
  });

  const handleSubmit = () => {
    console.log(items);
    closeModal();
    setItems({
      Name: "",
      Time: "",
      Cost: "",
      Type: "expense",
      Category: "general",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Add Transaction</h2>
          <button
            onClick={closeModal}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            ×
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Transaction Name
            </label>
            <input
              type="text"
              className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              placeholder="e.g., Grocery Store"
              value={items.Name}
              onChange={(e) => setItems({ ...items, Name: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Type
              </label>
              <select
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                value={items.Type}
                onChange={(e) => setItems({ ...items, Type: e.target.value })}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                value={items.Category}
                onChange={(e) =>
                  setItems({ ...items, Category: e.target.value })
                }
              >
                <option value="general">General</option>
                <option value="food">Food & Dining</option>
                <option value="transport">Transportation</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
                <option value="salary">Salary</option>
                <option value="investment">Investment</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              value={items.Time}
              onChange={(e) => setItems({ ...items, Time: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Amount ($)
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
              placeholder="0.00"
              value={items.Cost}
              onChange={(e) => setItems({ ...items, Cost: e.target.value })}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 font-medium transition-colors"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium transition-colors shadow-lg"
              onClick={handleSubmit}
            >
              Add Transaction
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
