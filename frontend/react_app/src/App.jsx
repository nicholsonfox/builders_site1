import './App.css'
import PriceList from './components/PriceList/PriceList';
import ContactInformation from './components/ContactInformation/ContactInformation';
import HeaderWithCompanyInfo from './components/HeaderWithCompanyInfo/HeaderWithCompanyInfo'
import Benefits from './components/Benefits/Benefits'

import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Router>
      <HeaderWithCompanyInfo />
      <Routes>
          <Route path="/" element={
            <>
              <Benefits />
              <PriceList />
              <ContactInformation />
            </>
            } />
      </Routes>
      </Router>
      


    </div>
  );
}

export default App;