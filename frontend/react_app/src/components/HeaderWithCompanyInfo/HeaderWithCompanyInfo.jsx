import React, { useState } from 'react';
import './HeaderWithCompanyInfo.css';
import { Routes, Route, Link } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';
import PriceListOnly from '../PriceList/PriceListOnly'
import ContactsPage from '../ContactsPage/ContactsPage'; // Компонент для страницы "Контакты"

export default function HeaderWithCompanyInfo() {
  const [isFormOpen, setIsFormOpen] = useState(false); // Состояние для открытия/закрытия формы

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="company_info">
      {/* Header */}
      <header className="header">
        <div className="logo">ООО «СтройСиб С»</div>
        <nav className="nav">
          <Link to="/" className="nav-button">Главная</Link>
          <Link to="/services" className="nav-button">Услуги</Link>
          <Link to="/contacts" className="nav-button">Контакты</Link>
        </nav>
      </header>

      {/* Динамический блок content */}
      
        <Routes>
          <Route path="/services" element={<PriceListOnly/>} />
          <Route path="/contacts" element={<ContactsPage />} />
          {/* Маршрут по умолчанию (главная страница) */}
          <Route
            path="/"
            element={
              <>
              <div className="content">
                <h2>О компании</h2>
                <p className="description">
                  Мы — ООО «СтройСиб С», компания с многолетним опытом в области подземных раскопок, прокладки труб и подземной проводки. Наша миссия — обеспечить надежность, безопасность и эффективность ваших инфраструктурных проектов.
                </p>
                <div className="social_links">
                  <h3>Мы в социальных сетях</h3>
                  <div className="icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/145/145813.png" alt="ВКонтакте" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
                    </a>
                  </div>
                </div>
                </div>
              </>
            }
          />
        </Routes>

      {/* Кнопка "Оставить заявку" */}
      <button className="apply-button" onClick={handleOpenForm}>Оставить заявку</button>
      {isFormOpen && <PostForm onClose={handleCloseForm} />}
    </div>
  );
}