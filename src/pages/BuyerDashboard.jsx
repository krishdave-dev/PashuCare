import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Users, Star, ShoppingCart, TrendingUp, MapPin, Award, CheckCircle, Search, Filter } from 'lucide-react';

const BuyerDashboard = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('farmers');
  const [selectedFarmer, setSelectedFarmer] = useState(null);

  // Dummy data
  const farmers = [
    {
      id: 1,
      name: 'राम कुमार',
      location: 'गुजरात, भारत',
      score: 92,
      rating: 4.8,
      products: ['Milk', 'Cheese', 'Butter'],
      certifications: ['Organic', 'Fair Trade'],
      verified: true,
      totalOrders: 156,
      lastActive: '2 hours ago',
      image: null
    },
    {
      id: 2,
      name: 'श्याम पटेल',
      location: 'राजस्थान, भारत',
      score: 76,
      rating: 4.2,
      products: ['Meat', 'Poultry'],
      certifications: ['HACCP'],
      verified: true,
      totalOrders: 89,
      lastActive: '1 day ago',
      image: null
    },
    {
      id: 3,
      name: 'विकास शर्मा',
      location: 'उत्तर प्रदेश, भारत',
      score: 58,
      rating: 3.5,
      products: ['Eggs', 'Dairy'],
      certifications: [],
      verified: false,
      totalOrders: 34,
      lastActive: '3 days ago',
      image: null
    },
    {
      id: 4,
      name: 'अजय गुप्ता',
      location: 'मध्य प्रदेश, भारत',
      score: 88,
      rating: 4.6,
      products: ['Vegetables', 'Fruits'],
      certifications: ['Organic', 'ISO 22000'],
      verified: true,
      totalOrders: 203,
      lastActive: '5 hours ago',
      image: null
    }
  ];

  const trustedFarmers = farmers.filter(farmer => farmer.score >= 80 && farmer.verified);

  const productCategories = [
    { name: 'Dairy Products', count: 45, trend: '+12%' },
    { name: 'Meat & Poultry', count: 32, trend: '+8%' },
    { name: 'Eggs', count: 28, trend: '+5%' },
    { name: 'Vegetables', count: 67, trend: '+15%' }
  ];

  const recentOrders = [
    { id: 1, farmer: 'राम कुमार', product: 'Organic Milk', quantity: '500L', amount: '₹25,000', status: 'delivered', date: '2024-01-15' },
    { id: 2, farmer: 'अजय गुप्ता', product: 'Fresh Vegetables', quantity: '200kg', amount: '₹8,000', status: 'pending', date: '2024-01-14' },
    { id: 3, farmer: 'श्याम पटेल', product: 'Chicken', quantity: '50kg', amount: '₹7,500', status: 'delivered', date: '2024-01-13' }
  ];

  const tabs = [
    { id: 'farmers', label: t('buyer.farmerProfiles'), icon: <Users className="h-4 w-4" /> },
    { id: 'trusted', label: t('buyer.trustedFarmers'), icon: <Star className="h-4 w-4" /> },
    { id: 'products', label: t('buyer.productRatings'), icon: <ShoppingCart className="h-4 w-4" /> },
    { id: 'orders', label: 'Recent Orders', icon: <TrendingUp className="h-4 w-4" /> }
  ];

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-2">{t('buyer.title')}</h1>
        <p className="text-teal-100 text-lg">Find and connect with trusted farmers for quality products</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-teal-100 rounded-lg">
              <Users className="h-6 w-6 text-teal-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{farmers.length}</h3>
              <p className="text-teal-600 font-medium">Total Farmers</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <Star className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{trustedFarmers.length}</h3>
              <p className="text-teal-600 font-medium">{t('buyer.trustedFarmers')}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <ShoppingCart className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{productCategories.reduce((acc, cat) => acc + cat.count, 0)}</h3>
              <p className="text-teal-600 font-medium">Available Products</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-teal-100 p-6">
          <div className="flex items-center">
            <div className="p-3 bg-amber-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-amber-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-2xl font-bold text-gray-900">{recentOrders.length}</h3>
              <p className="text-teal-600 font-medium">Recent Orders</p>
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
          {/* Farmer Profiles Tab */}
          {activeTab === 'farmers' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{t('buyer.farmerProfiles')}</h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                    {t('filter')}
                  </button>
                  <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm">
                    Sort by Score
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {farmers.map((farmer) => (
                  <div key={farmer.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{farmer.name.charAt(0)}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{farmer.name}</h4>
                          <p className="text-sm text-gray-500">{farmer.location}</p>
                        </div>
                      </div>
                      {farmer.verified && (
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          ✓ {t('buyer.verified')}
                        </span>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{t('buyer.score')}:</span>
                        <span className={`text-sm font-medium ${getScoreColor(farmer.score)}`}>
                          {farmer.score}/100
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{t('buyer.rating')}:</span>
                        <div className="flex items-center space-x-1">
                          {renderStars(farmer.rating)}
                          <span className="text-sm text-gray-600 ml-1">({farmer.rating})</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-sm text-gray-600">{t('buyer.products')}:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {farmer.products.map((product, index) => (
                            <span key={index} className="inline-flex px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                              {product}
                            </span>
                          ))}
                        </div>
                      </div>

                      {farmer.certifications.length > 0 && (
                        <div>
                          <span className="text-sm text-gray-600">{t('buyer.certification')}:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {farmer.certifications.map((cert, index) => (
                              <span key={index} className="inline-flex px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex justify-between items-center text-xs text-gray-500">
                          <span>{farmer.totalOrders} orders</span>
                          <span>Active {farmer.lastActive}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex space-x-2">
                      <button 
                        onClick={() => setSelectedFarmer(farmer)}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-700"
                      >
                        {t('view')} Profile
                      </button>
                      <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md text-sm hover:bg-gray-200">
                        Contact
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trusted Farmers Tab */}
          {activeTab === 'trusted' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{t('buyer.trustedFarmers')}</h3>
                <p className="text-sm text-gray-600">Farmers with score ≥ 80 and verified status</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trustedFarmers.map((farmer) => (
                  <div key={farmer.id} className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{farmer.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{farmer.name}</h4>
                        <p className="text-sm text-gray-500">{farmer.location}</p>
                      </div>
                      <div className="ml-auto">
                        <span className="text-2xl">⭐</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Trust Score:</span>
                        <span className="text-sm font-bold text-green-600">{farmer.score}/100</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Rating:</span>
                        <div className="flex items-center">
                          {renderStars(farmer.rating)}
                          <span className="text-sm text-gray-600 ml-1">({farmer.rating})</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Total Orders:</span>
                        <span className="text-sm font-medium">{farmer.totalOrders}</span>
                      </div>
                    </div>

                    <button className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded-md text-sm hover:bg-green-700">
                      Order Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Product Ratings Tab */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{t('buyer.productRatings')}</h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                  View All Categories
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {productCategories.map((category, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-gray-900">{category.name}</h4>
                      <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                        {category.trend}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{category.count}</div>
                    <div className="text-sm text-gray-600">Available farmers</div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-md font-medium text-gray-900 mb-4">Top Rated Products</h4>
                <div className="space-y-3">
                  {[
                    { name: 'Organic Milk', rating: 4.9, farmers: 12, price: '₹45/L' },
                    { name: 'Free Range Eggs', rating: 4.7, farmers: 8, price: '₹6/piece' },
                    { name: 'Fresh Vegetables', rating: 4.6, farmers: 25, price: '₹30/kg' },
                    { name: 'Grass Fed Meat', rating: 4.5, farmers: 6, price: '₹400/kg' }
                  ].map((product, index) => (
                    <div key={index} className="flex items-center justify-between py-2">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium text-gray-900">{product.name}</span>
                          <div className="flex items-center">
                            {renderStars(product.rating)}
                            <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">{product.farmers} farmers available</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-gray-900">{product.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Recent Orders Tab */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
                  New Order
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
                        Quantity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {order.farmer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.product}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.quantity}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            order.status === 'delivered' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-blue-600 hover:text-blue-900 mr-4">{t('view')}</button>
                          {order.status === 'delivered' && (
                            <button className="text-green-600 hover:text-green-900">Rate</button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Farmer Detail Modal */}
      {selectedFarmer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-900">Farmer Profile</h2>
                <button
                  onClick={() => setSelectedFarmer(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{selectedFarmer.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{selectedFarmer.name}</h3>
                  <p className="text-gray-600">{selectedFarmer.location}</p>
                  <div className="flex items-center mt-1">
                    {renderStars(selectedFarmer.rating)}
                    <span className="text-sm text-gray-600 ml-1">({selectedFarmer.rating})</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className={`p-4 rounded-lg ${getScoreBgColor(selectedFarmer.score)}`}>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getScoreColor(selectedFarmer.score)}`}>
                      {selectedFarmer.score}
                    </div>
                    <div className="text-sm text-gray-600">Trust Score</div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{selectedFarmer.totalOrders}</div>
                    <div className="text-sm text-gray-600">Total Orders</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Products</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedFarmer.products.map((product, index) => (
                      <span key={index} className="inline-flex px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedFarmer.certifications.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFarmer.certifications.map((cert, index) => (
                        <span key={index} className="inline-flex px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  Place Order
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200">
                  Contact Farmer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyerDashboard;