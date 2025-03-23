import React, { useState } from 'react'; // Добавлен импорт useState
import './PriceList.css';
import PostFormWithoutBack from '../PostFormWithoutBack/PostFormWithoutBack';

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
                <th>Вид работ</th>
                <th>Ед. изм.</th>
                <th>Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="category" colspan="3">Копка траншеи</td>
              </tr>
              <tr>
                <td>1 кабель, 1 кирпич</td>
                <td>м</td>
                <td>1 000,00 ₽</td>
              </tr>
              <tr>
                <td>2 кабеля, 1 кирпич</td>
                <td>м</td>
                <td>1 300,00 ₽</td>
              </tr>
              <tr>
                <td>2 кабеля, 1,5 кирпича</td>
                <td>м</td>
                <td>1 400,00 ₽</td>
              </tr>
              <tr>
                <td>2 кабеля, 2 кирпича</td>
                <td>м</td>
                <td>1 500,00 ₽</td>
              </tr>
              <tr>
                <td>3 кабеля, 2 кирпича</td>
                <td>м</td>
                <td>1 700,00 ₽</td>
              </tr>
              <tr>
                <td>4 кабеля, 2 кирпича</td>
                <td>м</td>
                <td>1 900,00 ₽</td>
              </tr>
              <tr>
                <td>4 кабеля, 2,5 кирпича</td>
                <td>м</td>
                <td>2 100,00 ₽</td>
              </tr>
              <tr>
                <td>4 кабеля, 4 кирпича</td>
                <td>м</td>
                <td>2 500,00 ₽</td>
              </tr>
              <tr>
                <td class="category" colspan="3">Прокладка асфальта</td>
              </tr>
              <tr>
                <td>Тротуар</td>
                <td>м²</td>
                <td>2 100,00 ₽</td>
              </tr>
              <tr>
                <td>Дорога</td>
                <td>м²</td>
                <td>2 500,00 ₽</td>
              </tr>
              <tr>
                <td>Бетон</td>
                <td>м²</td>
                <td>2 300,00 ₽</td>
              </tr>

              <tr>
                <td class="category" colspan="3">Восстановление газона</td>
              </tr>
              <tr>
                <td>Черный грунт</td>
                <td>м²</td>
                <td>500,00 ₽</td>
              </tr>

              <tr>
                <td class="category" colspan="3">Восстановление обочин</td>
              </tr>
              <tr>
                <td>Щебень</td>
                <td>м²</td>
                <td>550,00 ₽</td>
              </tr>
              <tr>
                <td>Отсев</td>
                <td>м²</td>
                <td>270,00 ₽</td>
              </tr>

              <tr>
                <td class="category" colspan="3">Монтаж бордюра</td>
              </tr>
              <tr>
                <td>Садовый</td>
                <td>шт</td>
                <td>1 600,00 ₽</td>
              </tr>
              <tr>
                <td>Дорожный</td>
                <td>шт</td>
                <td>2 500,00 ₽</td>
              </tr>

              <tr>
                <td class="category" colspan="3">Укладка тротуарной плитки</td>
              </tr>
              <tr>
                <td>Укладка тротуарной плитки</td>
                <td>м²</td>
                <td>1 300,00 ₽</td>
              </tr>

              <tr>
                <td class="category" colspan="3">Вывоз грунта</td>
              </tr>
              <tr>
                <td>Вывоз грунта</td>
                <td>10 т</td>
                <td>7 000,00 ₽</td>
              </tr>

              <tr>
                <td class="category" colspan="3">МКСМ</td>
              </tr>
              <tr>
                <td>МКСМ</td>
                <td>ч</td>
                <td>2 500,00 ₽</td>
              </tr>

              <tr>
                <td class="category" colspan="3">Песок</td>
              </tr>
              <tr>
                <td>Песок</td>
                <td>Машина</td>
                <td>9 500,00 ₽</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Кнопка "Оставить заявку" */}
        <p></p>
        <PostFormWithoutBack onClose={handleCloseForm}></PostFormWithoutBack>
      </div>
    );
  }