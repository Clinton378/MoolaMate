import React, { useState } from 'react';
import { Search, Filter, Star, Calendar, DollarSign, GraduationCap, ExternalLink } from 'lucide-react';

const BursaryFinder = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const bursaries = [
    {
      id: 1,
      title: 'UP Merit Bursary',
      provider: 'University of Pretoria',
      amount: 'R15,000',
      deadline: '2024-03-15',
      match: 87,
      category: 'merit',
      requirements: ['GPA > 3.0', 'South African citizen', 'Financial need'],
      description: 'Merit-based bursary for outstanding academic performance',
      applied: false
    },
    {
      id: 2,
      title: 'NSFAS Top-up Grant',
      provider: 'National Student Financial Aid',
      amount: 'R8,500',
      deadline: '2024-02-28',
      match: 92,
      category: 'need-based',
      requirements: ['Family income < R350k', 'NSFAS recipient', 'Good academic standing'],
      description: 'Additional funding for NSFAS students with exceptional need',
      applied: true
    },
    {
      id: 3,
      title: 'Tech Skills Development Bursary',
      provider: 'TechCorp Foundation',
      amount: 'R12,000',
      deadline: '2024-04-10',
      match: 78,
      category: 'field-specific',
      requirements: ['Computer Science/IT student', 'Community involvement', 'Innovation project'],
      description: 'Supporting the next generation of tech innovators',
      applied: false
    },
    {
      id: 4,
      title: 'Women in STEM Scholarship',
      provider: 'STEM Foundation SA',
      amount: 'R20,000',
      deadline: '2024-03-30',
      match: 65,
      category: 'demographic',
      requirements: ['Female student', 'STEM field', 'Leadership experience'],
      description: 'Empowering women to excel in science and technology',
      applied: false
    },
    {
      id: 5,
      title: 'Rural Development Bursary',
      provider: 'Department of Rural Development',
      amount: 'R10,000',
      deadline: '2024-05-15',
      match: 45,
      category: 'demographic',
      requirements: ['Rural background', 'Agriculture/Development studies', 'Community commitment'],
      description: 'Supporting students from rural communities',
      applied: false
    }
  ];

  const filteredBursaries = bursaries.filter(bursary => {
    const matchesSearch = bursary.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bursary.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || bursary.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getMatchColor = (match: number) => {
    if (match >= 80) return 'text-green-600 bg-green-100';
    if (match >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Bursary Finder</h1>
        <p className="text-blue-100">AI-powered matching to find the perfect funding opportunities</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative flex-1 md:mr-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search bursaries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Categories</option>
                <option value="merit">Merit-based</option>
                <option value="need-based">Need-based</option>
                <option value="field-specific">Field-specific</option>
                <option value="demographic">Demographic</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Available</p>
              <p className="text-2xl font-bold text-gray-900">{bursaries.length}</p>
            </div>
            <GraduationCap className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Applied</p>
              <p className="text-2xl font-bold text-gray-900">{bursaries.filter(b => b.applied).length}</p>
            </div>
            <Star className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">High Match</p>
              <p className="text-2xl font-bold text-gray-900">{bursaries.filter(b => b.match >= 80).length}</p>
            </div>
            <Star className="w-8 h-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Value</p>
              <p className="text-2xl font-bold text-gray-900">R65.5k</p>
            </div>
            <DollarSign className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Bursary List */}
      <div className="space-y-4">
        {filteredBursaries.map((bursary) => {
          const daysLeft = getDaysUntilDeadline(bursary.deadline);
          return (
            <div key={bursary.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{bursary.title}</h3>
                      <p className="text-sm text-gray-600">{bursary.provider}</p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getMatchColor(bursary.match)}`}>
                        {bursary.match}% match
                      </span>
                      {bursary.applied && (
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          Applied
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{bursary.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-900">{bursary.amount}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">
                        {daysLeft > 0 ? `${daysLeft} days left` : 'Deadline passed'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-600 capitalize">{bursary.category.replace('-', ' ')}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {bursary.requirements.map((req, index) => (
                        <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2 lg:ml-6 mt-4 lg:mt-0">
                  {!bursary.applied ? (
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2">
                      <span>Apply Now</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  ) : (
                    <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg cursor-not-allowed">
                      Application Submitted
                    </button>
                  )}
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredBursaries.length === 0 && (
        <div className="text-center py-12">
          <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No bursaries found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </div>
      )}
    </div>
  );
};

export default BursaryFinder;