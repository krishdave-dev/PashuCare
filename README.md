# AgriMonitor Dashboard

A comprehensive antibiotic usage monitoring system for farmers, veterinarians, regulators, and buyers to ensure food safety through proper tracking of antibiotic treatments in livestock and poultry production.

## 🚀 Features

- **Multi-User Dashboard System**: Separate dashboards for Veterinarians, Regulators, and Buyers
- **Mobile Responsive Design**: Optimized for all device sizes
- **Multi-Language Support**: English, Hindi, and Gujarati
- **Modern UI/UX**: Built with Tailwind CSS and Lucide React icons
- **Real-time Monitoring**: IoT integration for animal health alerts
- **Compliance Tracking**: Comprehensive reporting and trend analysis

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Build Tool**: Vite

## 📱 Dashboard Features

### 🩺 Veterinarian Dashboard
- Manage assigned farmers
- Approve/correct antibiotic doses
- View IoT abnormal activity alerts
- Access full AMU (Antimicrobial Usage) history
- Track treatment outcomes

### 🛡️ Regulator Dashboard
- Conduct random inspections
- Record food test results
- Track compliance violations
- Analyze trend data
- Generate compliance reports

### 🛒 Buyer Dashboard
- Browse farmer profiles
- Check product ratings and safety scores
- Verify compliance history
- Make informed purchasing decisions
- Access trusted farmer network

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/agrimonitor-dashboard.git
   cd agrimonitor-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.jsx      # Main layout wrapper
│   ├── Header.jsx      # Navigation header
│   └── Sidebar.jsx     # Navigation sidebar
├── pages/              # Dashboard pages
│   ├── HomePage.jsx    # Landing page
│   ├── VetDashboard.jsx        # Veterinarian dashboard
│   ├── RegulatorDashboard.jsx  # Regulator dashboard
│   └── BuyerDashboard.jsx      # Buyer dashboard
├── contexts/           # React contexts
│   └── LanguageContext.jsx    # Multi-language support
├── hooks/              # Custom React hooks
│   └── useTranslation.js      # Translation hook
└── App.jsx             # Main application component
```

## 🌐 Multi-Language Support

The application supports three languages:
- **English** (default)
- **Hindi** (हिंदी)
- **Gujarati** (ગુજરાતી)

Language can be switched using the dropdown in the header.

## 📱 Mobile Responsiveness

- Responsive design for all screen sizes
- Mobile-optimized navigation with collapsible sidebar
- Touch-friendly interface elements
- Optimized table scrolling for mobile devices

## 🎨 Design System

- **Primary Color**: Teal (#0f766e, #0d9488)
- **Background**: White with subtle gradients
- **Typography**: Modern, clean fonts
- **Icons**: Lucide React for consistency
- **Layout**: Classic dashboard design with sidebar navigation

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Key Highlights

- **Food Safety Focus**: Ensures proper antibiotic withdrawal periods
- **Compliance Monitoring**: Real-time tracking of regulatory compliance
- **IoT Integration**: Alerts for abnormal animal activities
- **Data Analytics**: Advanced reporting and trend analysis
- **User-Friendly**: Intuitive interface for all user types

## 📊 Dashboard Statistics

- 10,000+ Farmers Registered
- 500,000+ Animals Monitored
- 99.9% Compliance Rate
- 24/7 Monitoring System

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or support, please contact:
- Email: your-email@example.com
- Project Link: https://github.com/YOUR_USERNAME/agrimonitor-dashboard

## 🙏 Acknowledgments

- Built for Smart India Hackathon (SIH)
- Focused on agricultural food safety and antibiotic resistance prevention
- Designed for farmers, veterinarians, regulators, and food buyers