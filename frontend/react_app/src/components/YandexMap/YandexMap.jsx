import React, { memo } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './YandexMap.css';

const YandexMap = memo(() => {
  const defaultState = {
    center: [54.991315, 82.914348], // Координаты центра карты
    zoom: 10, // Уровень масштабирования
  };

  return (
    <YMaps>
      <div className="map-container">
        <Map defaultState={defaultState} width="100%" height="100%">
          <Placemark geometry={[54.991315, 82.914348]} />
        </Map>
      </div>
    </YMaps>
  );
});

export default YandexMap;