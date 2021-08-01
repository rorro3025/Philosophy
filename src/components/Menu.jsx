import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        </div>
      </nav>
    </div>
  );
};

export default Menu;
