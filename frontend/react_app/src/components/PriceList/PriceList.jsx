import React, { useState } from 'react'; // Добавлен импорт useState
import './PriceList.css';
import PostForm from '../PostForm/PostForm';

export default function PriceList() {
  const [isFormOpen, setIsFormOpen] = useState(false); // Состояние для открытия/закрытия формы
  
    const handleOpenForm = () => {
      setIsFormOpen(true);
    };
  
    const handleCloseForm = () => {
      setIsFormOpen(false);
    };

    return (
      <div className='background_image'>
          <div className ="price_list">
          <h2>Наши услуги</h2>
          <table>
            <thead>
              <tr>
                <th>Услуга</th>
                <th>Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Раскопка</td>
                <td>От 1500р</td>
              </tr>
              <tr>
                <td>Раскопка</td>
                <td>От 1500р</td>
              </tr>
              <tr>
                <td>Раскопка</td>
                <td>От 1500р</td>
              </tr>
              <tr>
                <td>Раскопка</td>
                <td>От 1500р</td>
              </tr>
              <tr>
                <td>Раскопка</td>
                <td>От 1500р</td>
              </tr>
              <tr>
                <td>Раскопка</td>
                <td>От 1500р</td>
              </tr>
              <tr>
                <td>Раскопка</td>
                <td>От 1500р</td>
              </tr>
              <tr>
                <td>Раскопка</td>
                <td>От 1500р</td>
              </tr>
              <tr>
                <td>Раскопка</td>
                <td>От 1500р</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Кнопка "Оставить заявку" */}
        <button className="apply-button" onClick={handleOpenForm}>Оставить заявку</button>
        {isFormOpen && <PostForm onClose={handleCloseForm} />}
      </div>
    );
  }