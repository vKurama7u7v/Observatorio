import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.styles.css";
import Logo from "../../../assets/logos/Logotipo_OCTMA.svg";

export default function Navbar() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const onShowSearchInput = () => {
    if (showSearchInput) {
      setShowSearchInput(false);
    } else {
      setShowSearchInput(true);
    }
  };

  const onShowNavbar = () => {
    if (showNavbar) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };

  return (
    <>
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="header__logo">
          <Link to="/index">
            <img src={Logo} alt="" width={"169px"} />
          </Link>
        </div>

        <nav className={showNavbar ? "navbar show" : "navbar"}>
          <div className="nav__content">
            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <Link className="nav__link">¿Quienes Somos?</Link>
                </li>
                {/* <li className="nav__item">
                  <Link className="nav__link">
                    Red Nacional de Observatorios
                  </Link>
                </li> */}
                <li className="nav__item">
                  <Link className="nav__link">Plataforma de Datos</Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link">Incidencia</Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link">Publicaciones</Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link">En Medios</Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link">Contacto</Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link">Atención a víctimas</Link>
                </li>

                <li className="nav__item">
                  <form
                    action="#"
                    className={
                      showSearchInput ? "search-box show" : "search-box"
                    }
                  >
                    <button
                      type="button"
                      className="close-icon"
                      onClick={onShowSearchInput}
                    >
                      <i class="fa-sharp fa-solid fa-xmark"></i>
                    </button>

                    <input
                      type="text"
                      placeholder="Escriba algo para buscar..."
                      required
                    />

                    <button type="submit" className="go-icon">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                  </form>

                  <button
                    className="btn-reset btn-search"
                    onClick={onShowSearchInput}
                  >
                    <i className="bx bx-search-alt-2"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <button className="btn-reset header__toggle" onClick={onShowNavbar}>
          <i className="bx bx-menu" id="header-toggle"></i>
        </button>
      </header>
    </>
  );
}
