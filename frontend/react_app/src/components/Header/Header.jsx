import './Header.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function Header() {
    return (
      <Router>
          <header>
            <div className="logo">Мой Логотип</div>
            <nav className="nav">
              <Link to="/" className="nav-button">Главная</Link>
              <Link to="/about" className="nav-button">О нас</Link>
              <Link to="/services" className="nav-button">Услуги</Link>
              <Link to="/contacts" className="nav-button">Контакты</Link>
            </nav>
          </header>
      </Router>
      
    );
  }