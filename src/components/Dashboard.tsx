import React from 'react';
import { TrendingUp, DollarSign, Target, Shield, Award, Zap } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, Clara! 👋</h1>
        <p className="text-indigo-100">Your financial journey is looking great today</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Balance</p>
              <p className="text-2xl font-bold text-gray-900">R2,450</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">+12%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Saved This Month</p>
              <p className="text-2xl font-bold text-gray-900">R680</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500">Goal: R800</span>
              <span className="text-blue-600 font-medium">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Credit Score</p>
              <p className="text-2xl font-bold text-gray-900">742</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">+23 points</span>
            <span className="text-gray-500 ml-1">this month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Security Score</p>
              <p className="text-2xl font-bold text-gray-900">98%</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <Zap className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-green-600 font-medium">Excellent</span>
            <span className="text-gray-500 ml-1">protection</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h3>
          <div className="space-y-4">
            {[
              { name: 'Grocery Store', amount: '-R245', time: '2 hours ago', category: 'Food' },
              { name: 'Salary Deposit', amount: '+R3,200', time: '1 day ago', category: 'Income' },
              { name: 'Coffee Shop', amount: '-R45', time: '2 days ago', category: 'Food' },
              { name: 'Bus Fare', amount: '-R25', time: '3 days ago', category: 'Transport' },
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{transaction.name}</p>
                  <p className="text-sm text-gray-500">{transaction.time} • {transaction.category}</p>
                </div>
                <span className={`font-semibold ${
                  transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Insights</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <p className="text-sm font-medium text-blue-800">Smart Saving Tip</p>
              <p className="text-sm text-blue-700 mt-1">
                You're spending 15% more on coffee this month. Consider making coffee at home to save R120!
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <p className="text-sm font-medium text-green-800">Achievement Unlocked!</p>
              <p className="text-sm text-green-700 mt-1">
                Congratulations! You've maintained a 7-day saving streak. Keep it up!
              </p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="text-sm font-medium text-yellow-800">Bursary Alert</p>
              <p className="text-sm text-yellow-700 mt-1">
                New bursary opportunity matches your profile. Apply by Friday to qualify!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;