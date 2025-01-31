import './App.css'
import PriceList from './components/PriceList/PriceList';
import ContactInformation from './components/ContactInformation/ContactInformation';
import HeaderWithCompanyInfo from './components/HeaderWithCompanyInfo/HeaderWithCompanyInfo'
import Benefits from './components/Benefits/Benefits'
import AboutPage from './components/AboutPage/AboutPage';
import ServicesPage from './components/ServicesPage/ServicesPage'; 
import ContactsPage from './components//ContactsPage/ContactsPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          
        </Routes>
      </Router>
      <HeaderWithCompanyInfo />
      <Benefits />
      <PriceList />
      <ContactInformation />


    </div>
  );
}

export default App;