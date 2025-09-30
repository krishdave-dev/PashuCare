import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { 
  Home, 
  Shield, 
  ClipboardCheck, 
  TrendingUp, 
  Users, 
  FileText, 
  AlertTriangle, 
  Settings,
  LogOut 
} from 'lucide-react';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const { t } = useTranslation();

  const menuItems = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <Home className="w-5 h-5" />
    },
    {
      path: '/vet',
      name: 'Animal Health',
      icon: <Shield className="w-5 h-5" />
    },
    {
      path: '/regulator',
      name: 'Compliance',
      icon: <ClipboardCheck className="w-5 h-5" />
    },
    {
      path: '/buyer',
      name: 'Marketplace',
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  const additionalFeatures = [
    {
      name: 'Farm Management',
      icon: <Users className="w-5 h-5" />
    },
    {
      name: 'Reports',
      icon: <FileText className="w-5 h-5" />
    },
    {
      name: 'Alerts',
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      name: 'Settings',
      icon: <Settings className="w-5 h-5" />
    }
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-white border-r border-teal-100 shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:relative md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } safe-top safe-bottom`}
      >
        {/* Logo/Brand */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-teal-100 bg-gradient-to-r from-teal-50 to-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">PC</span>
            </div>
            <div>
              <span className="text-xl font-bold text-teal-800 tracking-tight">PashuCare</span>
              <p className="text-xs text-teal-600 font-medium">Livestock Management</p>
            </div>
          </div>
          <button
            onClick={closeSidebar}
            className="md:hidden p-2 rounded-lg hover:bg-teal-50 text-teal-600 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <div className="px-4 space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg transform scale-[0.98]'
                      : 'text-teal-700 hover:bg-teal-50 hover:text-teal-800 hover:translate-x-1'
                  }`
                }
              >
                {item.icon}
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Additional Features Section */}
          <div className="mt-8 px-4">
            <h3 className="text-xs uppercase font-semibold text-teal-500 tracking-wider mb-3 px-4">
              Quick Access
            </h3>
            <div className="space-y-1">
              {additionalFeatures.map((feature, index) => (
                <button
                  key={index}
                  className="w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium text-teal-600 hover:bg-teal-50 hover:text-teal-700 transition-colors duration-200"
                >
                  {feature.icon}
                  <span>{feature.name}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-teal-100 bg-gradient-to-t from-teal-25 to-white">
          <button className="flex items-center space-x-3 px-4 py-3 w-full text-left rounded-xl text-sm font-medium text-teal-600 hover:bg-teal-50 hover:text-teal-700 transition-all duration-200 group">
            <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
            <span>{t('logout')}</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;