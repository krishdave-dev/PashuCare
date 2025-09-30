import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Eye, TestTube, AlertTriangle, TrendingUp, FileText, Calendar, Users, Shield } from 'lucide-react';

const RegulatorDashboard = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('inspections');

  // Dummy data
  const inspections = [
    { id: 1, farmer: 'राम कुमार', location: 'गुजरात', date: '2024-01-15', status: 'completed', result: 'passed', score: 85 },
    { id: 2, farmer: 'श्याम पटेल', location: 'राजस्थान', date: '2024-01-14', status: 'pending', result: null, score: null },
    { id: 3, farmer: 'विकास शर्मा', location: 'उत्तर प्रदेश', date: '2024-01-13', status: 'completed', result: 'failed', score: 45 }
  ];

  const foodTests = [
    { id: 1, farmer: 'राम कुमार', product: 'Milk', testType: 'Antibiotic Residue', result: 'passed', date: '2024-01-15', value: '< 0.1 ppm' },
    { id: 2, farmer: 'श्याम पटेल', product: 'Meat', testType: 'Bacterial Count', result: 'failed', date: '2024-01-14', value: '> 1000 CFU/g' },
    { id: 3, farmer: 'विकास शर्मा', product: 'Eggs', testType: 'Chemical Residue', result: 'passed', date: '2024-01-13', value: 'Within limits' }
  ];

  const violations = [
    { id: 1, farmer: 'श्याम पटेल', type: 'Antibiotic Overuse', severity: 'high', date: '2024-01-14', action: 'Fine Imposed', amount: '₹50,000' },
    { id: 2, farmer: 'विकास शर्मा', type: 'Record Keeping', severity: 'medium', date: '2024-01-13', action: 'Warning Issued', amount: null },
    { id: 3, farmer: 'अजय गुप्ता', type: 'Expired Drugs', severity: 'high', date: '2024-01-12', action: 'License Suspended', amount: null }
  ];

  const complianceData = [
    { region: 'गुजरात', total: 120, compliant: 102, rate: 85 },
    { region: 'राजस्थान', total: 95, compliant: 76, rate: 80 },
    { region: 'उत्तर प्रदेश', total: 150, compliant: 105, rate: 70 },
    { region: 'मध्य प्रदेश', total: 80, compliant: 68, rate: 85 }
  ];

  const tabs = [
    { id: 'inspections', label: t('regulator.inspections'), icon: <Eye className="h-4 w-4" /> },
    { id: 'tests', label: t('regulator.foodTests'), icon: <TestTube className="h-4 w-4" /> },
    { id: 'violations', label: t('regulator.violations'), icon: <AlertTriangle className="h-4 w-4" /> },
    { id: 'trends', label: t('regulator.trendAnalysis'), icon: <TrendingUp className="h-4 w-4" /> }
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getResultColor = (result) => {
    switch (result) {
      case 'passed': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-2">{t('regulator.title')}</h1>
        <p className="text-teal-100 text-lg">Monitor compliance and conduct food safety inspections</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-teal-100 rounded-lg">
              <Eye className="h-6 w-6 text-teal-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{inspections.length}</h3>
              <p className="text-teal-600 font-medium">Total {t('regulator.inspections')}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{inspections.filter(i => i.result === 'passed').length}</h3>
              <p className="text-teal-600 font-medium">{t('regulator.passed')}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{violations.length}</h3>
              <p className="text-teal-600 font-medium">{t('regulator.violations')}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">78%</h3>
              <p className="text-teal-600 font-medium">{t('regulator.compliance')} Rate</p>
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
          {/* Inspections Tab */}
          {activeTab === 'inspections' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{t('regulator.inspections')}</h3>
                <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 text-sm transition-colors">
                  {t('regulator.randomCheckup')}
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Farmer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('buyer.location')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('vet.date')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('status')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('regulator.testResult')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('buyer.score')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {inspections.map((inspection) => (
                      <tr key={inspection.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {inspection.farmer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {inspection.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {inspection.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            inspection.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {inspection.status === 'completed' ? t('completed') : t('pending')}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {inspection.result && (
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getResultColor(inspection.result)}`}>
                              {inspection.result === 'passed' ? t('regulator.passed') : t('regulator.failed')}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {inspection.score && `${inspection.score}/100`}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-4">{t('view')}</button>
                          {inspection.status === 'pending' && (
                            <button className="text-green-600 hover:text-green-900">Complete</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Food Tests Tab */}
          {activeTab === 'tests' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{t('regulator.foodTests')}</h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                  {t('regulator.recordTest')}
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Farmer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Test Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('regulator.testResult')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Value
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t('vet.date')}
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {foodTests.map((test) => (
                      <tr key={test.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {test.farmer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {test.product}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {test.testType}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getResultColor(test.result)}`}>
                            {test.result === 'passed' ? t('regulator.passed') : t('regulator.failed')}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {test.value}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {test.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-4">{t('view')}</button>
                          {test.result === 'failed' && (
                            <button className="text-red-600 hover:text-red-900">Take Action</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Violations Tab */}
          {activeTab === 'violations' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{t('regulator.violations')}</h3>
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm">
                  Record Violation
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {violations.map((violation) => (
                  <div key={violation.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSeverityColor(violation.severity)}`}>
                        {violation.severity.toUpperCase()}
                      </span>
                      <span className="text-xs text-gray-500">{violation.date}</span>
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">{violation.farmer}</h4>
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-medium">Type:</span> {violation.type}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Action:</span> {violation.action}
                    </p>
                    {violation.amount && (
                      <p className="text-sm text-red-600 font-medium mb-2">{violation.amount}</p>
                    )}
                    <button className="text-blue-600 hover:text-blue-900 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trend Analysis Tab */}
          {activeTab === 'trends' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{t('regulator.trendAnalysis')}</h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                  Generate Report
                </button>
              </div>

              {/* Compliance by Region */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">Regional Compliance Rates</h4>
                <div className="space-y-4">
                  {complianceData.map((region, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">{region.region}</span>
                          <span className="text-sm text-gray-500">{region.rate}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${region.rate}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{region.compliant} compliant</span>
                          <span>{region.total} total</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly Trends */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">Monthly Inspection Trends</h4>
                <div className="flex items-center justify-center h-48">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">Trend Analysis Chart</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Detailed trend analysis and charts will be displayed here.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegulatorDashboard;