import React, { useState } from 'react'; // Добавлен импорт useState
import './PriceList.css';
import PostFormWithoutBack from '../PostFormWithoutBack/PostFormWithoutBack';

export default function PriceListOnly() {
  const [isFormOpen, setIsFormOpen] = useState(false); // Состояние для открытия/закрытия формы
  
    const handleOpenForm = () => {
      setIsFormOpen(true);
    };
  
    const handleCloseForm = () => {
      setIsFormOpen(false);
    };

    return (
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
    );
  }