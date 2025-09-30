
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import VetDashboard from './pages/VetDashboard';
import RegulatorDashboard from './pages/RegulatorDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vet" element={<Layout><VetDashboard /></Layout>} />
          <Route path="/regulator" element={<Layout><RegulatorDashboard /></Layout>} />
          <Route path="/buyer" element={<Layout><BuyerDashboard /></Layout>} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
