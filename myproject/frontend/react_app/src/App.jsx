import './App.css'
import PriceList from './components/PriceList/PriceList';
import ContactInformation from './components/ContactInformation/ContactInformation';
import HeaderWithCompanyInfo from './components/HeaderWithCompanyInfo/HeaderWithCompanyInfo'
import Benefits from './components/Benefits/Benefits'

function App() {
  return (
    <div className="app-container">
      <HeaderWithCompanyInfo />
      <Benefits />
      <PriceList />
      <ContactInformation />
    </div>
  );
}

export default App;