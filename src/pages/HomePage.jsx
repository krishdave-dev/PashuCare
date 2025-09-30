import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Heart, Shield, TrendingUp, Users, Eye, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
      <div className="relative bg-gradient-to-r from-teal-600 to-teal-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {t('Antibiotic Monitoring System')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('Ensuring food safety through comprehensive antibiotic usage tracking in livestock and poultry production')}
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors">
              {t('Get Started')}
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
              {t('Learn More')}
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-800 mb-16">
            {t('Key Features')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-4">{t('Animal Health')}</h3>
              <p className="text-gray-600">
                {t('Comprehensive tracking of antibiotic treatments and animal welfare monitoring')}
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-4">{t('Food Safety')}</h3>
              <p className="text-gray-600">
                {t('Ensuring safe food products through proper antibiotic withdrawal periods')}
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-teal-50 hover:bg-teal-100 transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-teal-800 mb-4">{t('Data Analytics')}</h3>
              <p className="text-gray-600">
                {t('Advanced reporting and trend analysis for better decision making')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            {t('Impact & Statistics')}
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-teal-100">{t('Farmers Registered')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500,000+</div>
              <div className="text-teal-100">{t('Animals Monitored')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-teal-100">{t('Compliance Rate')}</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-teal-100">{t('Monitoring System')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* User Roles Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-teal-800 mb-16">
            {t('System Users')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl border border-teal-200">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">{t('Veterinarians')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                  {t('Manage prescriptions')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                  {t('Monitor treatment outcomes')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                  {t('Track withdrawal periods')}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl border border-teal-200">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">{t('Regulators')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                  {t('Conduct inspections')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                  {t('Analyze compliance data')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                  {t('Generate reports')}
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl border border-teal-200">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-600 text-white rounded-full mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">{t('Buyers')}</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                  {t('Access farmer profiles')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                  {t('Verify product safety')}
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-600 mr-2" />
                  {t('Make informed purchases')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-teal-700 to-teal-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('Ready to Get Started?')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('Join thousands of farmers, veterinarians, and food safety professionals using our platform')}
          </p>
          <button className="bg-white text-teal-700 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-colors">
            {t('Sign Up Today')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
