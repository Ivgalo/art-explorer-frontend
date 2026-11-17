import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation" aria-label="Navegación principal">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `navigation__link ${isActive ? "navigation__link_active" : ""}`
        }
      >
        Inicio
      </NavLink>

      <NavLink
        to="/explorar"
        className={({ isActive }) =>
          `navigation__link ${isActive ? "navigation__link_active" : ""}`
        }
      >
        Explorar
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `navigation__link ${isActive ? "navigation__link_active" : ""}`
        }
      >
        Acerca de
      </NavLink>
    </nav>
  );
}

export default Navigation;