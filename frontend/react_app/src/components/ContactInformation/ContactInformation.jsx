import './ContactInformation.css';
import YandexMap  from '../YandexMap/YandexMap';

export default function PriceList() {
    return (
      <div className="contact_information">
        <div>
          <h2>Адрес офиса:г. Новосибирск улица Немировича-Данченко 156</h2>
          <h2>Телефон:+7 (123) 456-78-90</h2>
          <h2>email: verylongemailaddress@example.com</h2>
          <h2>ИНН:5401987601</h2>
          <h2>КПП:540101001</h2>
          <h2>ОГРН: 1185476083231</h2>
        </div>
        <YandexMap />
    </div>
    );
  }