import React from 'react';
import YandexMap from '../YandexMap/YandexMap';
import './ContactsPage.css'; // Подключаем стили

const ContactsPage = () => {
  return (
    <div className="contact_information">
      <div className='contact_information_text'>
        <h2>Адрес офиса: г. Новосибирск, улица Немировича-Данченко, 156</h2>
        <h2>Телефон: +7 (983) 125-55-66</h2>
        <h2>email: stroisibs@mail.ru</h2>
        <h2>ИНН: 5401987601</h2>
        <h2>КПП: 540101001</h2>
        <h2>ОГРН: 1185476083231</h2>
      </div>
      <YandexMap />
      <div className="social_links">
      <h3>Мы в социальных сетях</h3>
      <div className="icons">
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/145/145813.png" alt="ВКонтакте" />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />
        </a>
      </div>
    </div>
    </div>
  );
};

export default ContactsPage;