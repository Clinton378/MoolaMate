import React, { useState } from 'react';
import { Trophy, Star, Target, Users, Zap, Award, Calendar, TrendingUp } from 'lucide-react';

const GamificationHub = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const userStats = {
    level: 12,
    xp: 2450,
    xpToNext: 550,
    totalPoints: 15680,
    streak: 7,
    rank: 23
  };

  const achievements = [
    { 
      id: 1, 
      name: 'First Steps', 
      description: 'Complete your first budget', 
      progress: 100, 
      earned: true, 
      rarity: 'common',
      points: 100,
      icon: '🎯'
    },
    { 
      id: 2, 
      name: 'Savings Streak', 
      description: 'Save money for 7 consecutive days', 
      progress: 100, 
      earned: true, 
      rarity: 'rare',
      points: 250,
      icon: '🔥'
    },
    { 
      id: 3, 
      name: 'Budget Master', 
      description: 'Stay under budget for 3 months', 
      progress: 67, 
      earned: false, 
      rarity: 'epic',
      points: 500,
      icon: '👑'
    },
    { 
      id: 4, 
      name: 'Credit Legend', 
      description: 'Reach a credit score of 800+', 
      progress: 25, 
      earned: false, 
      rarity: 'legendary',
      points: 1000,
      icon: '⭐'
    }
  ];

  const challenges = [
    {
      id: 1,
      title: 'Weekly Saver',
      description: 'Save R100 this week',
      progress: 75,
      reward: 150,
      timeLeft: '2 days',
      type: 'weekly'
    },
    {
      id: 2,
      title: 'Budget Tracker',
      description: 'Log 5 expenses today',
      progress: 60,
      reward: 50,
      timeLeft: '18 hours',
      type: 'daily'
    },
    {
      id: 3,
      title: 'Credit Builder',
      description: 'Improve credit score by 10 points',
      progress: 30,
      reward: 300,
      timeLeft: '25 days',
      type: 'monthly'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Thabo M.', points: 18450, avatar: 'T' },
    { rank: 2, name: 'Sarah K.', points: 17230, avatar: 'S' },
    { rank: 3, name: 'Mike R.', points: 16890, avatar: 'M' },
    { rank: 4, name: 'Lisa P.', points: 16120, avatar: 'L' },
    { rank: 5, name: 'You', points: 15680, avatar: 'C', isUser: true }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300 bg-gray-50';
      case 'rare': return 'border-blue-300 bg-blue-50';
      case 'epic': return 'border-purple-300 bg-purple-50';
      case 'legendary': return 'border-yellow-300 bg-yellow-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  const getRarityTextColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-700';
      case 'rare': return 'text-blue-700';
      case 'epic': return 'text-purple-700';
      case 'legendary': return 'text-yellow-700';
      default: return 'text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Level and XP */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Gaming Hub 🎮</h1>
            <p className="text-purple-100">Level up your financial skills!</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">Level {userStats.level}</div>
            <div className="text-sm text-purple-200">
              {userStats.xp} / {userStats.xp + userStats.xpToNext} XP
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress to Level {userStats.level + 1}</span>
            <span>{Math.round((userStats.xp / (userStats.xp + userStats.xpToNext)) * 100)}%</span>
          </div>
          <div className="w-full bg-purple-400 bg-opacity-30 rounded-full h-3">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-300" 
              style={{ width: `${(userStats.xp / (userStats.xp + userStats.xpToNext)) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
          <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{userStats.totalPoints}</div>
          <div className="text-sm text-gray-600">Total Points</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
          <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{userStats.streak}</div>
          <div className="text-sm text-gray-600">Day Streak</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
          <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">#{userStats.rank}</div>
          <div className="text-sm text-gray-600">Global Rank</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center">
          <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-900">{achievements.filter(a => a.earned).length}</div>
          <div className="text-sm text-gray-600">Achievements</div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="flex border-b border-gray-200">
          {[
            { id: 'overview', label: 'Overview', icon: Trophy },
            { id: 'achievements', label: 'Achievements', icon: Award },
            { id: 'challenges', label: 'Challenges', icon: Target },
            { id: 'leaderboard', label: 'Leaderboard', icon: Users }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium transition-colors ${
                  selectedTab === tab.id
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="p-6">
          {selectedTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Recent Achievements */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
                  <div className="space-y-3">
                    {achievements.filter(a => a.earned).slice(0, 3).map((achievement) => (
                      <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{achievement.name}</h4>
                          <p className="text-sm text-gray-600">{achievement.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-green-600">+{achievement.points} XP</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Challenges */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Challenges</h3>
                  <div className="space-y-3">
                    {challenges.slice(0, 3).map((challenge) => (
                      <div key={challenge.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{challenge.title}</h4>
                          <span className="text-xs text-gray-500">{challenge.timeLeft} left</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{challenge.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex-1 mr-3">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                                style={{ width: `${challenge.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <span className="text-sm font-medium text-purple-600">+{challenge.reward} XP</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'achievements' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">All Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id} 
                    className={`p-4 rounded-lg border-2 transition-all ${getRarityColor(achievement.rarity)} ${
                      achievement.earned ? 'opacity-100' : 'opacity-60'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <span className="text-3xl">{achievement.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className={`font-semibold ${getRarityTextColor(achievement.rarity)}`}>
                              {achievement.name}
                            </h4>
                            <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                              achievement.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-800' :
                              achievement.rarity === 'epic' ? 'bg-purple-100 text-purple-800' :
                              achievement.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {achievement.rarity}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                          {!achievement.earned && (
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-purple-600 h-2 rounded-full transition-all duration-300" 
                                style={{ width: `${achievement.progress}%` }}
                              ></div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-purple-600">+{achievement.points} XP</div>
                        {achievement.earned && (
                          <Star className="w-5 h-5 text-yellow-500 mt-1" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'challenges' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Active Challenges</h3>
              <div className="space-y-4">
                {challenges.map((challenge) => (
                  <div key={challenge.id} className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{challenge.title}</h4>
                        <p className="text-gray-600">{challenge.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">+{challenge.reward}</div>
                        <div className="text-sm text-gray-500">XP Reward</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Progress: {challenge.progress}%</span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {challenge.timeLeft} remaining
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full transition-all duration-300" 
                        style={{ width: `${challenge.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'leaderboard' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Monthly Leaderboard</h3>
              <div className="space-y-2">
                {leaderboard.map((user) => (
                  <div 
                    key={user.rank} 
                    className={`flex items-center justify-between p-4 rounded-lg transition-all ${
                      user.isUser ? 'bg-purple-50 border-2 border-purple-200' : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                        user.rank === 1 ? 'bg-yellow-500' :
                        user.rank === 2 ? 'bg-gray-400' :
                        user.rank === 3 ? 'bg-orange-500' :
                        'bg-purple-600'
                      }`}>
                        {user.rank <= 3 ? (
                          <Trophy className="w-4 h-4" />
                        ) : (
                          user.rank
                        )}
                      </div>
                      <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {user.avatar}
                      </div>
                      <div>
                        <h4 className={`font-medium ${user.isUser ? 'text-purple-900' : 'text-gray-900'}`}>
                          {user.name}
                        </h4>
                        {user.isUser && <p className="text-sm text-purple-600">That's you!</p>}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{user.points.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">points</div>
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

export default GamificationHub;