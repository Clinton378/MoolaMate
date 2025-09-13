import React, { useState } from 'react';
import { TrendingUp, Award, Users, Target, Star, ArrowRight, CheckCircle } from 'lucide-react';

const CreditBuilder = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const creditData = {
    score: 742,
    previousScore: 719,
    level: 'Excellent',
    percentile: 85,
    factors: [
      { name: 'Payment History', score: 95, weight: 35, status: 'excellent' },
      { name: 'Spending Behavior', score: 88, weight: 30, status: 'good' },
      { name: 'Savings Discipline', score: 92, weight: 20, status: 'excellent' },
      { name: 'Social Credit', score: 76, weight: 15, status: 'fair' }
    ]
  };

  const achievements = [
    { name: 'First Saver', description: 'Completed your first savings goal', earned: true, rarity: 'common' },
    { name: 'Budget Master', description: 'Stayed under budget for 3 months', earned: true, rarity: 'rare' },
    { name: 'Credit Climber', description: 'Improved credit score by 50+ points', earned: true, rarity: 'epic' },
    { name: 'Social Butterfly', description: 'Connected with 10+ financially responsible friends', earned: false, rarity: 'legendary' }
  ];

  const recommendations = [
    {
      title: 'Connect More Friends',
      description: 'Add 3 more financially responsible friends to boost your social credit score',
      impact: '+15 points',
      difficulty: 'Easy',
      timeframe: '1 week'
    },
    {
      title: 'Micro-Investment',
      description: 'Start a small investment account to diversify your financial profile',
      impact: '+25 points',
      difficulty: 'Medium',
      timeframe: '1 month'
    },
    {
      title: 'Credit Building Loan',
      description: 'Take a small, manageable loan to build payment history',
      impact: '+30 points',
      difficulty: 'Medium',
      timeframe: '3 months'
    }
  ];

  const socialNetwork = [
    { name: 'Thabo M.', score: 780, status: 'connected', avatar: 'T' },
    { name: 'Sarah K.', score: 695, status: 'connected', avatar: 'S' },
    { name: 'Mike R.', score: 820, status: 'pending', avatar: 'M' },
    { name: 'Lisa P.', score: 750, status: 'suggested', avatar: 'L' }
  ];

  return (
    <div className="space-y-6">
      {/* Header with Score */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Credit Score Builder</h1>
            <p className="text-purple-100">Build your financial reputation with AI-powered insights</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">{creditData.score}</div>
            <div className="text-sm text-purple-200">
              +{creditData.score - creditData.previousScore} this month
            </div>
            <div className="text-xs text-purple-300 mt-1">{creditData.level}</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'factors', label: 'Score Factors' },
            { id: 'social', label: 'Social Credit' },
            { id: 'achievements', label: 'Achievements' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-6 py-3 text-sm font-medium transition-colors ${
                selectedTab === tab.id
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {selectedTab === 'overview' && (
            <div className="space-y-6">
              {/* Score Visualization */}
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto">
                  <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(creditData.score / 850) * 251.2} 251.2`}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">{creditData.score}</div>
                      <div className="text-sm text-gray-500">out of 850</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  You're in the top {100 - creditData.percentile}% of MoolaMate users!
                </p>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg hover:shadow-md transition-all">
                  <Target className="w-8 h-8 text-green-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Set Goal</h3>
                  <p className="text-sm text-gray-600">Target your next score milestone</p>
                </button>
                <button className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg hover:shadow-md transition-all">
                  <Users className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Invite Friends</h3>
                  <p className="text-sm text-gray-600">Boost your social credit score</p>
                </button>
                <button className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg hover:shadow-md transition-all">
                  <Award className="w-8 h-8 text-purple-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">Premium</h3>
                  <p className="text-sm text-gray-600">Unlock advanced features</p>
                </button>
              </div>
            </div>
          )}

          {selectedTab === 'factors' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Score Breakdown</h3>
              {creditData.factors.map((factor, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-gray-900">{factor.name}</span>
                      <span className="text-sm text-gray-500 ml-2">({factor.weight}% weight)</span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-gray-900">{factor.score}/100</span>
                      <div className={`text-xs px-2 py-1 rounded-full ml-2 inline-block ${
                        factor.status === 'excellent' ? 'bg-green-100 text-green-800' :
                        factor.status === 'good' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {factor.status}
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full ${
                        factor.status === 'excellent' ? 'bg-green-500' :
                        factor.status === 'good' ? 'bg-blue-500' :
                        'bg-yellow-500'
                      }`}
                      style={{ width: `${factor.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}

              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-indigo-900 mb-2">Improvement Recommendations</h4>
                <div className="space-y-3">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start justify-between">
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900">{rec.title}</h5>
                        <p className="text-sm text-gray-600">{rec.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                          <span>Impact: <strong className="text-green-600">{rec.impact}</strong></span>
                          <span>Difficulty: {rec.difficulty}</span>
                          <span>Time: {rec.timeframe}</span>
                        </div>
                      </div>
                      <button className="ml-4 p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'social' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Social Credit Network</h3>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Invite Friends
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {socialNetwork.map((friend, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {friend.avatar}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{friend.name}</h4>
                        <p className="text-sm text-gray-600">Score: {friend.score}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {friend.status === 'connected' && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                      <button className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                        friend.status === 'connected' ? 'bg-green-100 text-green-700' :
                        friend.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                      }`}>
                        {friend.status === 'connected' ? 'Connected' :
                         friend.status === 'pending' ? 'Pending' : 'Connect'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">How Social Credit Works</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Connect with financially responsible friends to boost your score</li>
                  <li>• Your network's average score influences your social credit factor</li>
                  <li>• Mutual connections create stronger credit relationships</li>
                  <li>• Help friends improve their scores to benefit everyone</li>
                </ul>
              </div>
            </div>
          )}

          {selectedTab === 'achievements' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Credit Building Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-4 rounded-lg border-2 transition-all ${
                    achievement.earned 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-gray-200 bg-gray-50'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Star className={`w-5 h-5 ${
                            achievement.earned ? 'text-yellow-500' : 'text-gray-400'
                          }`} />
                          <h4 className={`font-semibold ${
                            achievement.earned ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                            {achievement.name}
                          </h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            achievement.rarity === 'legendary' ? 'bg-purple-100 text-purple-800' :
                            achievement.rarity === 'epic' ? 'bg-orange-100 text-orange-800' :
                            achievement.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {achievement.rarity}
                          </span>
                        </div>
                        <p className={`text-sm ${
                          achievement.earned ? 'text-gray-600' : 'text-gray-400'
                        }`}>
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.earned && (
                        <CheckCircle className="w-6 h-6 text-green-500 ml-2" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreditBuilder;