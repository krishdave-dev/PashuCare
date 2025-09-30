import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, Bell, ChevronDown, User } from 'lucide-react';

const Header = ({ toggleSidebar }) => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'gu', name: 'ગુજરાતી', flag: '🇮🇳' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-teal-100 px-4 py-3 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-lg hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 text-teal-600 transition-colors duration-200"
        >
          <Menu className="w-6 h-6" />
        </button>
        <Link 
          to="/"
          className="flex items-center space-x-3 hover:opacity-75 transition-opacity"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">PC</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-teal-800 tracking-tight">PashuCare</h1>
            <p className="text-xs text-teal-600 font-medium -mt-1">Livestock Management</p>
          </div>
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 text-teal-700 transition-colors duration-200"
          >
            <span>{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
            <span className="hidden sm:block text-sm font-medium">
              {languages.find(lang => lang.code === currentLanguage)?.name}
            </span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {showLanguageDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl ring-1 ring-teal-200 z-50 border border-teal-100">
              <div className="py-2">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => {
                      changeLanguage(language.code);
                      setShowLanguageDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-sm hover:bg-teal-50 flex items-center space-x-3 transition-colors duration-200 ${
                      currentLanguage === language.code ? 'bg-teal-50 text-teal-700 font-medium' : 'text-teal-600'
                    }`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span>{language.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Notifications */}
        <button className="p-2.5 rounded-lg hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 relative text-teal-600 transition-colors duration-200">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 h-3 w-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full border-2 border-white"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <User className="w-5 h-5 text-white" />
          </div>
          <span className="hidden md:block text-sm font-medium text-teal-700">Admin User</span>
        </div>
      </div>
    </header>
  );
};

export default Header;