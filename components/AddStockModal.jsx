import React, { useEffect, useState } from "react";
import { Search, Plus, RefreshCw, AlertCircle } from "lucide-react";

export default function AddStockModal({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchStocks = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

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

  useEffect(() => {
    if (searchQuery) {
      const debounceTimer = setTimeout(() => {
        searchStocks(searchQuery);
      }, 300);
      return () => clearTimeout(debounceTimer);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md mx-4 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          ✕
        </button>

        <h3 className="text-lg font-semibold text-white mb-4">Add Stocks</h3>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            type="text"
            placeholder="Search stocks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:bg-white/15 transition-all"
          />
        </div>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mb-6 max-h-64 overflow-y-auto space-y-2">
            {searchResults.map((stock) => (
              <div
                key={stock.symbol}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
                onClick={() => {
                  // Implement addToWatchlist in parent or via context
                  console.log("Added", stock.symbol);
                  setSearchQuery("");
                  setSearchResults([]);
                  onClose(); // Close modal after adding
                }}
              >
                <div>
                  <p className="text-white font-medium text-sm">
                    {stock.symbol}
                  </p>
                  <p className="text-white/60 text-xs">{stock.name}</p>
                </div>
                <Plus className="w-4 h-4 text-white/60 group-hover:text-blue-400 transition-colors" />
              </div>
            ))}
          </div>
        )}

        {isLoading && searchQuery && (
          <div className="flex items-center justify-center py-8">
            <RefreshCw className="w-6 h-6 text-white/60 animate-spin" />
          </div>
        )}

        {/* Market Status */}
        <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 text-sm font-medium">
              Market Open
            </span>
          </div>
          <p className="text-green-200 text-xs">NYSE: 9:30 AM - 4:00 PM EST</p>
        </div>
      </div>
    </div>
  );
}
