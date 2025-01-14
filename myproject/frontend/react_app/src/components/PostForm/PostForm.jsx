import React, { useState } from 'react';
import './PostForm.css';

export default function PostForm({ onClose }) {
  const [entityType, setEntityType] = useState('Natural'); // Состояние для выбора типа лица

  const handleEntityChange = (type) => {
    setEntityType(type);
  };

  return (
    <div className='overlay'>
        <div className="post_form" id="post_form">
      {/* Кнопка закрытия */}
      <button
        type="button"
        className="close-button"
        onClick={onClose}
      >
        ×
      </button>

      <button type="button" onClick={() => handleEntityChange('Legal')}>
        Юридическое лицо
      </button>
      <button type="button" onClick={() => handleEntityChange('Natural')}>
        Физ. лицо
      </button>

      <form method="post">
        <input type="hidden" id="entities" name="entities" value={entityType} />

        {/* Форма для физ. лица */}
        <div className="form" style={{ display: entityType === 'Natural' ? 'block' : 'none' }} id="natural">
          <p>
            <label htmlFor="name">Введите ФИО:</label>
            <input type="text" name="author" id="author" required />
          </p>
          <p>
            <label htmlFor="email">Введите email:</label>
            <input type="email" name="email" id="email" required />
          </p>
          <p>
            <label htmlFor="phone">Введите телефон:</label>
            <input type="tel" name="phone" id="phone" required />
          </p>
        </div>

        {/* Форма для юр. лица */}
        <div className="form" style={{ display: entityType === 'Legal' ? 'block' : 'none' }} id="legal">
          <p>
            <label htmlFor="name">Введите ФИО контактного лица:</label>
            <input type="text" name="author" id="author" required />
          </p>
          <p>
            <label htmlFor="email">Введите email:</label>
            <input type="email" name="email" id="email" required />
          </p>
          <p>
            <label htmlFor="phone">Введите телефон:</label>
            <input type="tel" name="phone" id="phone" required />
          </p>
          <p>
            <label htmlFor="inn">Введите ИНН:</label>
            <input type="text" name="inn" id="inn" required />
          </p>
        </div>

        <button type="submit">Отправить</button>
      </form>
    </div>
    </div>
  );
}