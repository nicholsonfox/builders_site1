import React, { useState } from 'react';
import './PostForm.css';

export default function PostForm({ onClose }) {
  const [entityType, setEntityType] = useState('Natural'); // Состояние для выбора типа лица

  // Обработчик изменения типа лица
  const handleEntityChange = (type) => {
    setEntityType(type);
  };

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append('entities', entityType); // Добавляем тип лица в FormData

    // Создаем новый FormData объект для хранения только непустых значений
    const cleanFormData = new FormData();

    for (let [key, value] of formData.entries()) {
        if (value !== '') {
            cleanFormData.append(key, value);
        }
    }

    try {
      const response = await fetch('https://217.171.146.144:8000/submit-form', {
        method: 'POST',
        body: cleanFormData, // Отправляем FormData
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {

        onClose(); // Закрываем форму после успешной отправки
      } else {
        const errorData = await response.json();
        alert(`Ошибка: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте снова.');
    }
  };

  return (
    <div className="overlay">
      <div className="post_form" id="post_form">
        {/* Кнопка закрытия */}
        <button type="button" className="close-button" onClick={onClose}>
          ×
        </button>

        {/* Кнопки выбора типа лица */}
        <div className="entity-buttons">
          <button
            type="button"
            onClick={() => handleEntityChange('Legal')}
            className={entityType === 'Legal' ? 'active' : ''}
          >
            Юридическое лицо
          </button>
          <button
            type="button"
            onClick={() => handleEntityChange('Natural')}
            className={entityType === 'Natural' ? 'active' : ''}
          >
            Физ. лицо
          </button>
        </div>

        {/* Форма */}
        <form method="post" onSubmit={handleSubmit}>
          <input type="hidden" id="entities" name="entities" value={entityType} />

          {/* Форма для физ. лица */}
          <div className="form" style={{ display: entityType === 'Natural' ? 'block' : 'none' }} id="natural">
            <p>
              <label htmlFor="name">Введите ФИО:</label>
              <input type="text" name="author" id="author" required={entityType === 'Natural'} />
            </p>
            <p>
              <label htmlFor="email">Введите email:</label>
              <input type="email" name="email" id="email" required={entityType === 'Natural'} />
            </p>
            <p>
              <label htmlFor="phone">Введите телефон:</label>
              <input type="tel" name="phone" id="phone" required={entityType === 'Natural'} />
            </p>
          </div>

          {/* Форма для юр. лица */}
          <div className="form" style={{ display: entityType === 'Legal' ? 'block' : 'none' }} id="legal">
            <p>
              <label htmlFor="name">Введите ФИО контактного лица:</label>
              <input type="text" name="author" id="author" required={entityType === 'Legal'} />
            </p>
            <p>
              <label htmlFor="email">Введите email:</label>
              <input type="email" name="email" id="email" required={entityType === 'Legal'} />
            </p>
            <p>
              <label htmlFor="phone">Введите телефон:</label>
              <input type="tel" name="phone" id="phone" required={entityType === 'Legal'} />
            </p>
            <p>
              <label htmlFor="inn">Введите ИНН:</label>
              <input type="text" name="inn" id="inn" required={entityType === 'Legal'} />
            </p>
          </div>

          {/* Кнопка отправки формы */}
          <button type="submit" className="submit-button">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
