import './ContactInformation.css';
import YandexMap  from '../YandexMap/YandexMap';

export default function PriceList() {
    return (
      <div className="contact_information">
        <div>
          <h2>Адрес офиса:г. Новосибирск улица Немировича-Данченко 156</h2>
          <h2>Телефон: +7 (983) 125-55-66</h2>
          <h2>email: stroisibs@mail.ru</h2>
          <h2>ИНН:5401987601</h2>
          <h2>КПП:540101001</h2>
          <h2>ОГРН: 1185476083231</h2>
        </div>
        <YandexMap />
    </div>
    );
  }