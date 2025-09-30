import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Users, CheckCircle, AlertTriangle, History, Bell, Search, Calendar, Filter } from 'lucide-react';

const VetDashboard = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('farmers');

  // Dummy data
  const assignedFarmers = [
    { id: 1, name: 'राम कुमार', location: 'गुजरात', animals: 25, status: 'active' },
    { id: 2, name: 'श्याम पटेल', location: 'राजस्थान', animals: 18, status: 'active' },
    { id: 3, name: 'विकास शर्मा', location: 'उत्तर प्रदेश', animals: 32, status: 'inactive' }
  ];

  const pendingDoses = [
    { id: 1, farmer: 'राम कुमार', animalId: 'A001', drug: 'Amoxicillin', reason: 'Respiratory infection', date: '2024-01-15', status: 'pending' },
    { id: 2, farmer: 'श्याम पटेल', animalId: 'A025', drug: 'Tetracycline', reason: 'Wound treatment', date: '2024-01-14', status: 'pending' },
    { id: 3, farmer: 'विकास शर्मा', animalId: 'A012', drug: 'Penicillin', reason: 'Mastitis', date: '2024-01-13', status: 'approved' }
  ];

  const iotAlerts = [
    { id: 1, farmer: 'राम कुमार', animalId: 'A001', type: 'temperature', value: '103°F', severity: 'high', time: '2 hours ago' },
    { id: 2, farmer: 'श्याम पटेल', animalId: 'A025', type: 'activity', value: 'Low activity', severity: 'medium', time: '4 hours ago' },
    { id: 3, farmer: 'विकास शर्मा', animalId: 'A012', type: 'heartRate', value: '85 bpm', severity: 'low', time: '6 hours ago' }
  ];

  const tabs = [
    { id: 'farmers', label: t('vet.assignedFarmers'), icon: <Users className="h-4 w-4" /> },
    { id: 'doses', label: t('vet.doseApproval'), icon: <CheckCircle className="h-4 w-4" /> },
    { id: 'alerts', label: t('vet.iotAlerts'), icon: <Bell className="h-4 w-4" /> },
    { id: 'history', label: t('vet.amuHistory'), icon: <History className="h-4 w-4" /> }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-2">{t('vet.title')}</h1>
        <p className="text-teal-100 text-lg">Monitor and approve antimicrobial usage for assigned farmers</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-teal-100 rounded-lg">
              <Users className="h-6 w-6 text-teal-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{assignedFarmers.length}</h3>
              <p className="text-teal-600 font-medium">{t('vet.assignedFarmers')}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-amber-100 rounded-lg">
              <CheckCircle className="h-6 w-6 text-amber-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{pendingDoses.filter(d => d.status === 'pending').length}</h3>
              <p className="text-teal-600 font-medium">{t('pending')} {t('vet.doseApproval')}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{iotAlerts.filter(a => a.severity === 'high').length}</h3>
              <p className="text-teal-600 font-medium">High Priority Alerts</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <History className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{pendingDoses.filter(d => d.status === 'approved').length}</h3>
              <p className="text-teal-600 font-medium">{t('completed')} Today</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-lg border border-teal-100">
        <div className="border-b border-teal-100">
          <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap flex items-center space-x-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-teal-600 hover:border-teal-300'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Assigned Farmers Tab */}
          {activeTab === 'farmers' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{t('vet.assignedFarmers')}</h3>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 text-sm transition-colors">
                  {t('view')} All
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('vet.farmerName')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('buyer.location')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Animals
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('status')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {assignedFarmers.map((farmer) => (
                      <tr key={farmer.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {farmer.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {farmer.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {farmer.animals}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            farmer.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {farmer.status === 'active' ? t('active') : t('inactive')}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-teal-600 hover:text-teal-800 mr-4 font-medium">{t('view')}</button>
                          <button className="text-teal-600 hover:text-teal-800 font-medium">Contact</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Dose Approval Tab */}
          {activeTab === 'doses' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{t('vet.doseApproval')}</h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 text-sm transition-colors">
                    {t('approve')} All
                  </button>
                  <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 text-sm">
                    {t('filter')}
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('vet.farmerName')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('vet.animalId')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('vet.drug')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('vet.reason')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('vet.date')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('status')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {pendingDoses.map((dose) => (
                      <tr key={dose.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {dose.farmer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {dose.animalId}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {dose.drug}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {dose.reason}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {dose.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            dose.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {dose.status === 'pending' ? t('pending') : t('completed')}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          {dose.status === 'pending' && (
                            <div className="flex space-x-2">
                              <button className="text-green-600 hover:text-green-900">{t('approve')}</button>
                              <button className="text-teal-600 hover:text-teal-900">Correct Dose</button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* IoT Alerts Tab */}
          {activeTab === 'alerts' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{t('vet.iotAlerts')}</h3>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 text-sm">
                  Mark All Read
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {iotAlerts.map((alert) => (
                  <div key={alert.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(alert.severity)}`}>
                        {alert.severity.toUpperCase()}
                      </span>
                      <span className="text-xs text-gray-500">{alert.time}</span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">{alert.farmer}</h4>
                    <p className="text-sm text-gray-600 mb-1">Animal ID: {alert.animalId}</p>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">{alert.type}:</span> {alert.value}
                    </p>
                    <button className="text-teal-600 hover:text-teal-900 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AMU History Tab */}
          {activeTab === 'history' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{t('vet.amuHistory')}</h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 text-sm">
                    Export Report
                  </button>
                  <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 text-sm">
                    {t('filter')}
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">AMU History</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Comprehensive antimicrobial usage history and analytics will be displayed here.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VetDashboard;