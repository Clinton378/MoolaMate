import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Lock, Eye, EyeOff, Smartphone } from 'lucide-react';

const SecurityCenter = () => {
  const [showDetails, setShowDetails] = useState(false);

  const securityAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Unusual Login Attempt',
      description: 'Someone tried to access your account from Cape Town',
      time: '2 hours ago',
      action: 'Review Activity'
    },
    {
      id: 2,
      type: 'info',
      title: 'New Device Added',
      description: 'iPhone 13 was added to your trusted devices',
      time: '1 day ago',
      action: 'Manage Devices'
    },
    {
      id: 3,
      type: 'success',
      title: 'Security Scan Complete',
      description: 'No threats detected in your recent transactions',
      time: '3 days ago',
      action: 'View Report'
    }
  ];

  const securityFeatures = [
    {
      name: 'Two-Factor Authentication',
      description: 'Extra layer of security for your account',
      enabled: true,
      icon: Smartphone
    },
    {
      name: 'Biometric Login',
      description: 'Use fingerprint or face recognition',
      enabled: true,
      icon: Lock
    },
    {
      name: 'Transaction Alerts',
      description: 'Get notified of all account activity',
      enabled: true,
      icon: AlertTriangle
    },
    {
      name: 'Device Management',
      description: 'Control which devices can access your account',
      enabled: false,
      icon: Shield
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Security Center</h1>
            <p className="text-green-100">Your account security score: 98%</p>
          </div>
          <div className="text-right">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Security Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Account Status</p>
              <p className="text-xl font-bold text-green-600">Secure</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <p className="text-sm text-gray-500 mt-2">All security features active</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Alerts</p>
              <p className="text-xl font-bold text-yellow-600">1</p>
            </div>
            <AlertTriangle className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-sm text-gray-500 mt-2">Requires your attention</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Trusted Devices</p>
              <p className="text-xl font-bold text-blue-600">3</p>
            </div>
            <Smartphone className="w-8 h-8 text-blue-500" />
          </div>
          <p className="text-sm text-gray-500 mt-2">Devices with access</p>
        </div>
      </div>

      {/* Recent Security Alerts */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Security Activity</h3>
        <div className="space-y-4">
          {securityAlerts.map((alert) => (
            <div key={alert.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className={`p-2 rounded-full ${
                alert.type === 'warning' ? 'bg-yellow-100' :
                alert.type === 'success' ? 'bg-green-100' : 'bg-blue-100'
              }`}>
                {alert.type === 'warning' ? (
                  <AlertTriangle className={`w-5 h-5 text-yellow-600`} />
                ) : alert.type === 'success' ? (
                  <CheckCircle className={`w-5 h-5 text-green-600`} />
                ) : (
                  <Shield className={`w-5 h-5 text-blue-600`} />
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{alert.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                <p className="text-xs text-gray-500 mt-2">{alert.time}</p>
              </div>
              <button className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                {alert.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Security Features</h3>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
          >
            {showDetails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span className="text-sm">{showDetails ? 'Hide' : 'Show'} Details</span>
          </button>
        </div>
        
        <div className="space-y-4">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${feature.enabled ? 'bg-green-100' : 'bg-gray-100'}`}>
                    <Icon className={`w-5 h-5 ${feature.enabled ? 'text-green-600' : 'text-gray-400'}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{feature.name}</h4>
                    {showDetails && (
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`text-sm font-medium ${
                    feature.enabled ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {feature.enabled ? 'Enabled' : 'Disabled'}
                  </span>
                  <button className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    feature.enabled ? 'bg-green-600' : 'bg-gray-200'
                  }`}>
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      feature.enabled ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Emergency Actions */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-red-900 mb-4">Emergency Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="p-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-left">
            <h4 className="font-medium">Freeze Account</h4>
            <p className="text-sm text-red-100 mt-1">Immediately stop all transactions</p>
          </button>
          <button className="p-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-left">
            <h4 className="font-medium">Report Fraud</h4>
            <p className="text-sm text-yellow-100 mt-1">Report suspicious activity</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecurityCenter;