import { Link } from "react-router-dom";
import logo1 from "./img/logo_fesc.png";
import logo2 from "./img/Unam_letras.png";
import "../css/personal.css";
import "./menu.css";

const Menu = () => {
  return (
    <div className="bg-dark dark-1">
      <img src={logo2} alt="Logo UNAM" height="70px" id="logo" />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ¿Qué es la filosofia?
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/mainCharacters" className="nav-link">
                Representantes
              </Link>
              <Link to="/history" className="nav-link">
                Historia
              </Link>
              <Link to="/beauty" className="nav-link">
                La belleza
              </Link>
              <Link to="/ubication" className="nav-link">
                El origen
              </Link>
              <Link to="/contact" className="nav-link">
                Contactanos
              </Link>
              <Link to="/education" className="nav-link">
                Educación
              </Link>
            </div>
          </div>
          <div className="dropdown text-end">
            <a
              href="#"
              className="d-block link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </a>
            <ul
              className="dropdown-menu text-small"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
