"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  TrendingUp,
  Target,
  DollarSign,
  PieChart,
  Calculator,
  Lightbulb,
  ArrowUp,
  ArrowDown,
  Clock,
  Award,
} from "lucide-react";

export default function Retirement() {
  const [retirementData, setRetirementData] = useState({
    currentAge: 35,
    retirementAge: 65,
    currentSavings: 150000,
    monthlyContribution: 2000,
    expectedReturn: 7,
    monthlyExpenses: 4500,
    inflationRate: 3,
  });

  const [aiStrategies, setAiStrategies] = useState([
    {
      id: 1,
      title: "Increase 401(k) Contributions",
      description:
        "Based on your current income, you could increase your 401(k) contribution by 2% to maximize employer matching.",
      impact: "+$45,000 by retirement",
      priority: "High",
      category: "Tax-Advantaged",
    },
    {
      id: 2,
      title: "Diversify with Index Funds",
      description:
        "Consider allocating 70% to low-cost index funds to reduce fees and maintain steady growth.",
      impact: "+$23,000 by retirement",
      priority: "Medium",
      category: "Investment Mix",
    },
    {
      id: 3,
      title: "Roth IRA Conversion",
      description:
        "Convert some traditional IRA funds to Roth during lower income years to save on future taxes.",
      impact: "+$31,000 tax savings",
      priority: "Medium",
      category: "Tax Strategy",
    },
  ]);

  const [showCalculator, setShowCalculator] = useState(false);

  // Calculate retirement metrics
  const yearsToRetirement =
    retirementData.retirementAge - retirementData.currentAge;
  const monthsToRetirement = yearsToRetirement * 12;
  const futureValue =
    retirementData.currentSavings *
      Math.pow(1 + retirementData.expectedReturn / 100, yearsToRetirement) +
    (retirementData.monthlyContribution *
      (Math.pow(
        1 + retirementData.expectedReturn / 100 / 12,
        monthsToRetirement
      ) -
        1)) /
      (retirementData.expectedReturn / 100 / 12);
  const recommendedSavings =
    retirementData.monthlyExpenses *
    25 *
    Math.pow(1 + retirementData.inflationRate / 100, yearsToRetirement);
  const savingsGap = recommendedSavings - futureValue;
  const onTrack = savingsGap <= 0;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Retirement Planning Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Plan your future with AI-powered investment strategies
          </p>
        </div>

        {/* Main Retirement Status Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-white/20 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Years to Retirement */}
            <div className="text-center">
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-white">
                    <div className="text-3xl font-bold">
                      {yearsToRetirement}
                    </div>
                    <div className="text-sm opacity-90">Years</div>
                  </div>
                </div>
                <Clock className="absolute -top-2 -right-2 w-8 h-8 text-indigo-600 bg-white rounded-full p-1 shadow-md" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                Until Retirement
              </h3>
              <p className="text-gray-600">
                At age {retirementData.retirementAge}
              </p>
            </div>

            {/* Current Progress */}
            <div className="text-center">
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-white">
                    <div className="text-2xl font-bold">
                      {formatCurrency(retirementData.currentSavings).replace(
                        "$",
                        ""
                      )}
                    </div>
                    <div className="text-sm opacity-90">Saved</div>
                  </div>
                </div>
                <Target className="absolute -top-2 -right-2 w-8 h-8 text-green-600 bg-white rounded-full p-1 shadow-md" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                Current Savings
              </h3>
              <p className="text-gray-600">
                +{formatCurrency(retirementData.monthlyContribution)}/month
              </p>
            </div>

            {/* Retirement Readiness */}
            <div className="text-center">
              <div className="relative">
                <div
                  className={`w-32 h-32 mx-auto bg-gradient-to-br ${
                    onTrack
                      ? "from-green-500 to-emerald-600"
                      : "from-amber-500 to-orange-600"
                  } rounded-full flex items-center justify-center shadow-lg`}
                >
                  <div className="text-white">
                    <div className="text-2xl font-bold">
                      {onTrack ? "✓" : "!"}
                    </div>
                    <div className="text-sm opacity-90">
                      {onTrack ? "On Track" : "Needs Work"}
                    </div>
                  </div>
                </div>
                <Award className="absolute -top-2 -right-2 w-8 h-8 text-purple-600 bg-white rounded-full p-1 shadow-md" />
              </div>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                Retirement Status
              </h3>
              <p className={`${onTrack ? "text-green-600" : "text-amber-600"}`}>
                {onTrack
                  ? "Exceeding goals!"
                  : `${formatCurrency(Math.abs(savingsGap))} gap`}
              </p>
            </div>
          </div>
        </div>

        {/* Financial Projections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Projected Retirement Fund
              </h3>
              <button
                onClick={() => setShowCalculator(!showCalculator)}
                className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-200 transition-colors"
              >
                <Calculator className="w-4 h-4 inline mr-1" />
                Adjust
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Projected Value</span>
                <span className="text-2xl font-bold text-green-600">
                  {formatCurrency(futureValue)}
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">Recommended Target</span>
                <span className="text-lg font-semibold text-gray-800">
                  {formatCurrency(recommendedSavings)}
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <span className="text-gray-700">
                  Monthly Income in Retirement
                </span>
                <span className="text-xl font-bold text-blue-600">
                  {formatCurrency(futureValue / (25 * 12))}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-purple-600" />
              Retirement Breakdown
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Current Savings Growth</span>
                <span className="font-semibold text-gray-800">
                  {formatCurrency(
                    retirementData.currentSavings *
                      Math.pow(
                        1 + retirementData.expectedReturn / 100,
                        yearsToRetirement
                      )
                  )}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Monthly Contributions</span>
                <span className="font-semibold text-gray-800">
                  {formatCurrency(
                    retirementData.monthlyContribution * monthsToRetirement
                  )}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Investment Returns</span>
                <span className="font-semibold text-green-600">
                  +
                  {formatCurrency(
                    futureValue -
                      retirementData.currentSavings -
                      retirementData.monthlyContribution * monthsToRetirement
                  )}
                </span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span className="text-gray-800">Total Projected</span>
                  <span className="text-blue-600">
                    {formatCurrency(futureValue)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI-Powered Investment Strategies */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              AI-Powered Investment Strategies
            </h3>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-md">
              Generate New Strategies
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiStrategies.map((strategy) => (
              <div
                key={strategy.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {strategy.title}
                  </h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(
                      strategy.priority
                    )}`}
                  >
                    {strategy.priority}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {strategy.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-green-600 font-semibold text-sm">
                    {strategy.impact}
                  </span>
                  <span className="text-gray-500 text-xs bg-gray-100 px-2 py-1 rounded">
                    {strategy.category}
                  </span>
                </div>
                <button className="w-full mt-3 bg-blue-50 text-blue-600 py-2 rounded-lg text-sm hover:bg-blue-100 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Calculator Modal */}
        {showCalculator && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Retirement Calculator</h3>
                <button
                  onClick={() => setShowCalculator(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Age
                  </label>
                  <input
                    type="number"
                    value={retirementData.currentAge}
                    onChange={(e) =>
                      setRetirementData({
                        ...retirementData,
                        currentAge: parseInt(e.target.value),
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Retirement Age
                  </label>
                  <input
                    type="number"
                    value={retirementData.retirementAge}
                    onChange={(e) =>
                      setRetirementData({
                        ...retirementData,
                        retirementAge: parseInt(e.target.value),
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Savings ($)
                  </label>
                  <input
                    type="number"
                    value={retirementData.currentSavings}
                    onChange={(e) =>
                      setRetirementData({
                        ...retirementData,
                        currentSavings: parseInt(e.target.value),
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Monthly Contribution ($)
                  </label>
                  <input
                    type="number"
                    value={retirementData.monthlyContribution}
                    onChange={(e) =>
                      setRetirementData({
                        ...retirementData,
                        monthlyContribution: parseInt(e.target.value),
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expected Annual Return (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={retirementData.expectedReturn}
                    onChange={(e) =>
                      setRetirementData({
                        ...retirementData,
                        expectedReturn: parseFloat(e.target.value),
                      })
                    }
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  />
                </div>
                <button
                  onClick={() => setShowCalculator(false)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Update Calculations
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Action Items */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Next Steps to Boost Your Retirement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h4 className="font-semibold mb-2">This Month</h4>
              <ul className="space-y-1 text-sm opacity-90">
                <li>• Review your 401(k) allocation</li>
                <li>• Increase contribution by 1%</li>
                <li>• Set up automatic transfers</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h4 className="font-semibold mb-2">This Quarter</h4>
              <ul className="space-y-1 text-sm opacity-90">
                <li>• Rebalance your portfolio</li>
                <li>• Consider Roth conversion</li>
                <li>• Review expense ratios</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <h4 className="font-semibold mb-2">This Year</h4>
              <ul className="space-y-1 text-sm opacity-90">
                <li>• Max out retirement accounts</li>
                <li>• Diversify investments</li>
                <li>• Plan for healthcare costs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
