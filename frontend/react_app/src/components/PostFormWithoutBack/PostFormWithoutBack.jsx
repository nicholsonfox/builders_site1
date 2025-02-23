import React, { useState } from 'react';
import './PostFormWithoutBack.css'; // Подключаем стили

export default function PostFormWithoutBack() {
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
      const response = await fetch('http://217.171.146.144:8000/submit-form', {
        method: 'POST',
        body: cleanFormData, // Отправляем FormData
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        alert('Форма успешно отправлена!');
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
    <div className="form-container" id="form-container">
      {/* Кнопки выбора типа лица */}
      <div className="form-entity-buttons">
        <button
          type="button"
          onClick={() => handleEntityChange('Legal')}
          className={entityType === 'Legal' ? 'form-active' : ''}
        >
          Юридическое лицо
        </button>
        <button
          type="button"
          onClick={() => handleEntityChange('Natural')}
          className={entityType === 'Natural' ? 'form-active' : ''}
        >
          Физ. лицо
        </button>
      </div>

      {/* Форма */}
      <p></p>
      <form method="post" onSubmit={handleSubmit}>
        <input type="hidden" id="entities" name="entities" value={entityType} />

        {/* Форма для физ. лица */}
        <div className="form-section" style={{ display: entityType === 'Natural' ? 'flex' : 'none' }} id="natural">
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
        <div className="form-section" style={{ display: entityType === 'Legal' ? 'flex' : 'none' }} id="legal">
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
        <button type="submit" className="form-submit-button">
          Отправить
        </button>
      </form>
    </div>
  );
}