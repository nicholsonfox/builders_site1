import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PhotoSlider.css'; // Подключаем стили

export default function PhotoSlider() {
  // Настройки слайдера
  const settings = {
    dots: true, // Показывать точки-индикаторы
    infinite: true, // Бесконечная прокрутка
    speed: 500, // Скорость анимации
    slidesToShow: 1, // Количество показываемых слайдов
    slidesToScroll: 1, // Количество прокручиваемых слайдов
    autoplay: true, // Автопрокрутка
    autoplaySpeed: 3000, // Интервал автопрокрутки
  };

  // Массив с фотографиями (замените на свои)
  const photos = [
    'https://via.placeholder.com/800x400?text=Фото+1',
    'https://via.placeholder.com/800x400?text=Фото+2',
    'https://via.placeholder.com/800x400?text=Фото+3',
    'https://via.placeholder.com/800x400?text=Фото+4',
  ];

  return (
    <div className="photo-slider">
      <Slider {...settings}>
        {photos.map((photo, index) => (
          <div key={index}>
            <img src={photo} alt={`Фото ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}