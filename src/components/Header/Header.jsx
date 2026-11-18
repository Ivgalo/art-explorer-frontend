import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Art Explorer</h1>

      <p className="header__subtitle">
        Explora el arte más allá de lo convencional.
      </p>

      <Navigation />
    </header>
  );
}

export default Header;
