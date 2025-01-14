import React, { useState } from 'react';
import './HeaderWithCompanyInfo.css';
import PostForm from '../PostForm/PostForm';


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
        <div className="logo">НАЗВАНИЕ КОМПАНИИ</div>
        <nav className="nav">
          <button className="nav-button">О нас</button>
          <button className="nav-button">Услуги</button>
          <button className="nav-button">Контакты</button>
        </nav>
      </header>

      {/* Информация о компании */}
      <div className="content">
        <h2>О компании</h2>
        <p className="description">
        Мы — "НАЗВАНИЕ КОМПАНИИ", компания с многолетним опытом в области подземных раскопок, прокладки труб и подземной проводки. Наша миссия — обеспечить надежность, безопасность и эффективность ваших инфраструктурных проектов.
        </p>
        <div className="social_links">
          <h3>Мы в социальных сетях</h3>
          <div className="icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/124/124021.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Кнопка "Оставить заявку" */}
      <button className="apply-button" onClick={handleOpenForm}>Оставить заявку</button>
      {isFormOpen && <PostForm onClose={handleCloseForm} />}
    </div>
  );
}