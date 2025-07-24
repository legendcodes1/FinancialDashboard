"use client";
import React, { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  Shield,
  CreditCard,
  TrendingUp,
  TrendingDown,
  Lock,
  User,
  Mail,
  Home,
  BarChart3,
  Search,
  Plus,
  Star,
  Trash2,
  RefreshCw,
  DollarSign,
  Activity,
  AlertCircle,
  ChevronUp,
  ChevronDown,
  LineChart,
} from "lucide-react";
import AddStockModal from "@/components/AddStockModal";
export default function InvestmentTracker() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [watchlist, setWatchlist] = useState([
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 175.43,
      change: 2.34,
      changePercent: 1.35,
      sector: "Technology",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 138.21,
      change: -1.23,
      changePercent: -0.88,
      sector: "Technology",
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      price: 248.5,
      change: 12.45,
      changePercent: 5.27,
      sector: "Automotive",
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corp.",
      price: 378.85,
      change: 4.67,
      changePercent: 1.25,
      sector: "Technology",
    },
  ]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [portfolioValue, setPortfolioValue] = useState(45680.32);
  const [totalGainLoss, setTotalGainLoss] = useState(2348.67);
  const [totalGainLossPercent, setTotalGainLossPercent] = useState(5.42);
  const [modal, setModal] = useState(false);

  // Mock stock search function (replace with real API)
  const searchStocks = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    // Simulate API call - replace with real stock API
    const mockResults = [
      { symbol: "NVDA", name: "NVIDIA Corporation", sector: "Technology" },
      { symbol: "AMD", name: "Advanced Micro Devices", sector: "Technology" },
      { symbol: "AMZN", name: "Amazon.com Inc.", sector: "E-commerce" },
      { symbol: "META", name: "Meta Platforms Inc.", sector: "Technology" },
      { symbol: "NFLX", name: "Netflix Inc.", sector: "Entertainment" },
    ].filter(
      (stock) =>
        stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
        stock.name.toLowerCase().includes(query.toLowerCase())
    );

    setTimeout(() => {
      setSearchResults(mockResults);
      setIsLoading(false);
    }, 500);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  const formatPercent = (value) => {
    return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className=" bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Investment Tracker
            </h1>
            <p className="text-white/60">
              Track your favorite stocks and monitor market performance
            </p>
          </div>

          <button
            className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-4 text-white font-semibold hover:bg-white/30 transition-all flex items-center gap-2 shadow-lg"
            onClick={openModal}
          >
            Add Stock
          </button>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium opacity-90">
                Portfolio Value
              </h3>
              <DollarSign className="w-5 h-5 opacity-75" />
            </div>
            <p className="text-2xl font-bold">
              {formatCurrency(portfolioValue)}
            </p>
            <p className="text-sm opacity-75">Updated 2 mins ago</p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-white/80">
                Total Gain/Loss
              </h3>
              <Activity className="w-5 h-5 text-white/60" />
            </div>
            <p
              className={`text-2xl font-bold ${
                totalGainLoss >= 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {totalGainLoss >= 0 ? "+" : ""}
              {formatCurrency(totalGainLoss)}
            </p>
            <p
              className={`text-sm ${
                totalGainLoss >= 0 ? "text-green-300" : "text-red-300"
              }`}
            >
              {formatPercent(totalGainLossPercent)}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-white/80">Watchlist</h3>
              <Star className="w-5 h-5 text-white/60" />
            </div>
            <p className="text-2xl font-bold text-white">{watchlist.length}</p>
            <p className="text-sm text-white/60">Tracked stocks</p>
          </div>
        </div>

        <div className="flex flex-col justify-center ">
          {/* Main Chart/Portfolio Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 mb-6">
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
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-white/20 rounded-xl">
                <div className="text-center">
                  <LineChart className="w-16 h-16 text-white/30 mx-auto mb-4" />
                  <p className="text-white/70 font-medium">Portfolio Chart</p>
                  <p className="text-white/50 text-sm">
                    Integrate with Chart.js or similar library
                  </p>
                  <p className="text-white/40 text-xs mt-2">
                    Real-time portfolio performance visualization
                  </p>
                </div>
              </div>
            </div>

            {/* Watchlist */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">
                  Your Watchlist
                </h3>
                <button
                  className={`p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors ${
                    isLoading ? "animate-spin" : ""
                  }`}
                  disabled={isLoading}
                >
                  <RefreshCw className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="space-y-3">
                {watchlist.map((stock) => (
                  <div
                    key={stock.symbol}
                    className="group flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {stock.symbol.slice(0, 2)}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-base">
                          {stock.symbol}
                        </h4>
                        <p className="text-white/60 text-sm">{stock.name}</p>
                        <p className="text-white/40 text-xs">{stock.sector}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-white font-bold text-lg">
                          {formatCurrency(stock.price)}
                        </p>
                        <div className="flex items-center gap-1">
                          {stock.change >= 0 ? (
                            <ChevronUp className="w-4 h-4 text-green-400" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-red-400" />
                          )}
                          <span
                            className={`text-sm font-medium ${
                              stock.change >= 0
                                ? "text-green-400"
                                : "text-red-400"
                            }`}
                          >
                            {formatCurrency(Math.abs(stock.change))} (
                            {formatPercent(stock.changePercent)})
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromWatchlist(stock.symbol)}
                        className="opacity-0 group-hover:opacity-100 p-2 rounded-lg hover:bg-red-500/20 text-red-400 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {watchlist.length === 0 && (
                <div className="text-center py-8">
                  <Star className="w-12 h-12 text-white/30 mx-auto mb-3" />
                  <p className="text-white/60">
                    No stocks in your watchlist yet
                  </p>
                  <p className="text-white/40 text-sm">
                    Search and add stocks to start tracking
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Stock Search Sidebar */}
          {<AddStockModal isOpen={modal} onClose={closeModal} />}
        </div>
      </div>
    </div>
  );
}
