import React, { useState } from 'react';
import { PieChart, TrendingUp, TrendingDown, Plus, Target } from 'lucide-react';

const BudgetManager = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const budgetData = [
    { category: 'Food & Dining', budgeted: 800, spent: 650, color: 'bg-blue-500' },
    { category: 'Transport', budgeted: 400, spent: 420, color: 'bg-green-500' },
    { category: 'Entertainment', budgeted: 300, spent: 280, color: 'bg-purple-500' },
    { category: 'Shopping', budgeted: 500, spent: 320, color: 'bg-yellow-500' },
    { category: 'Bills', budgeted: 600, spent: 600, color: 'bg-red-500' },
  ];

  const totalBudgeted = budgetData.reduce((sum, item) => sum + item.budgeted, 0);
  const totalSpent = budgetData.reduce((sum, item) => sum + item.spent, 0);
  const remaining = totalBudgeted - totalSpent;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Budget Manager</h1>
          <p className="text-gray-600 mt-1">Track and manage your spending</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Category</span>
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Budgeted</p>
              <p className="text-2xl font-bold text-gray-900">R{totalBudgeted.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900">R{totalSpent.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500">of budget</span>
              <span className="text-red-600 font-medium">{Math.round((totalSpent / totalBudgeted) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-red-600 h-2 rounded-full" 
                style={{ width: `${Math.min((totalSpent / totalBudgeted) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Remaining</p>
              <p className={`text-2xl font-bold ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                R{Math.abs(remaining).toLocaleString()}
              </p>
            </div>
            <div className={`p-3 rounded-lg ${remaining >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
              <TrendingUp className={`w-6 h-6 ${remaining >= 0 ? 'text-green-600' : 'text-red-600'}`} />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {remaining >= 0 ? 'Under budget' : 'Over budget'}
          </p>
        </div>
      </div>

      {/* Budget Categories */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Budget Categories</h3>
        <div className="space-y-6">
          {budgetData.map((item, index) => {
            const percentage = (item.spent / item.budgeted) * 100;
            const isOverBudget = item.spent > item.budgeted;
            
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                    <span className="font-medium text-gray-900">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      R{item.spent.toLocaleString()} / R{item.budgeted.toLocaleString()}
                    </p>
                    <p className={`text-sm ${isOverBudget ? 'text-red-600' : 'text-gray-500'}`}>
                      {isOverBudget ? '+' : ''}R{Math.abs(item.budgeted - item.spent).toLocaleString()} 
                      {isOverBudget ? ' over' : ' left'}
                    </p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-300 ${
                      isOverBudget ? 'bg-red-500' : item.color
                    }`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{Math.round(percentage)}% used</span>
                  {isOverBudget && (
                    <span className="text-red-600 font-medium">Over budget!</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <PieChart className="w-5 h-5 mr-2 text-indigo-600" />
          AI Budget Insights
        </h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-sm text-gray-700">
              <strong>Great job!</strong> You're R{remaining} under budget this month. Consider moving R200 to your emergency fund.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
            <p className="text-sm text-gray-700">
              <strong>Transport Alert:</strong> You're R20 over your transport budget. Try using the campus shuttle twice this week to get back on track.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <p className="text-sm text-gray-700">
              <strong>Optimization Tip:</strong> You could save R150/month by meal prepping on Sundays instead of buying lunch daily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetManager;