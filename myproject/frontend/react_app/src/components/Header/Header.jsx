import './Header.css';
export default function Header() {
    return (
      <header>
        <div className="logo">Мой Логотип</div>
        <nav className="nav">
          <button className="nav-button">О нас</button>
          <button className="nav-button">Услуги</button>
          <button className="nav-button">Контакты</button>
        </nav>
      </header>
    );
  }