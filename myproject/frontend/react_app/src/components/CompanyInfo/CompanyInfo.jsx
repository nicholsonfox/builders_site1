import React from 'react';
import './CompanyInfo.css';

export default function CompanyInfo() {
  return (
    <div className="company_info">
      <div className="content">
        <h1>Профессионализм под землей – надежность над землей.</h1>
        <h2>О компании</h2>
        <p className="description">
          Мы — современная компания, специализирующаяся на предоставлении качественных услуг. Наша миссия — сделать вашу жизнь проще и комфортнее.
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
    </div>
  );
}