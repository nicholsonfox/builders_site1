import React, { memo } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const YandexMap = memo(() => {
  const defaultState = {
    center: [54.991315, 82.914348], // Координаты центра карты
    zoom: 10, // Уровень масштабирования
  };

  return (
    <YMaps>
      <Map defaultState={defaultState} width="100%" height="400px">
        <Placemark geometry={[54.991315, 82.914348]} />
      </Map>
    </YMaps>
  );
});

export default YandexMap;
