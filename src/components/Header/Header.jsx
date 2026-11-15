import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Art Explorer</h1>
      <p className="header__subtitle">
        Explora el arte más allá de lo convencional.
        <nav className="header__nav">
  <Link to="/">Inicio</Link>
  <Link to="/about">Acerca de</Link>
</nav>
      </p>
    </header>
  );
}

export default Header;
