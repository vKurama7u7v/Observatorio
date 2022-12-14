import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/logos/Logotipo_OCTMA.svg";

import "./footer.styles.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="content mx-w">
          <div className="link-boxes">
            <div className="contact__info">
              <div className="footer__logo">
                <Link to="">
                  <img src={Logo} alt="" width={"169px"} />
                </Link>
              </div>

              <div className="footer__info">
                {/* <div className="item">
                  <div>
                    <i className="bx bx-map"></i>
                  </div>
                  <div>
                    <p>
                      Av. Dr. Burton E. Grossman 501 Pte-SECTOR 1, Tampico
                      Altamira, 89605 Miramar, Tamps
                    </p>
                  </div>
                </div> */}

                {/* <div className="item">
                  <div>
                    <i className="bx bx-phone"></i>
                  </div>
                  <div>
                    <p>+52 833 259 9772</p>
                  </div>
                </div> */}

                <div className="item">
                  <div>
                    <i className="bx bx-envelope"></i>
                  </div>
                  <div>
                    <p>contacto@octma.com.mx</p>
                  </div>
                </div>
              </div>
            </div>

            <ul className="box">
              <li className="link__name">Explorar</li>
              <li>
                <Link to="">Inicio</Link>
              </li>
              <li>
                <Link to="">Nosotros</Link>
              </li>
              <li>
                <Link to="">Reportes</Link>
              </li>
              <li>
                <Link to="">Noticias</Link>
              </li>
              <li>
                <Link to="">Plataforma de Datos</Link>
              </li>
            </ul>

            <ul className="box">
              <li className="link__name">Ayuda y Asistencia</li>
              <li>
                <Link to="">Contactanos</Link>
              </li>
              <li>
                <Link to="">Atenci??n a V??ctimas</Link>
              </li>
              <li>
                <Link to="">Preguntas Frecuentes</Link>
              </li>
              <li>
                <Link to="">Condiciones</Link>
              </li>
              <li>
                <Link to="">Pol??tica de Privacidad</Link>
              </li>
            </ul>

            {/* <ul className="box">
              <li className="link__name">Secci??n 3</li>
              <li>
                <Link to="">Editar 1</Link>
              </li>
              <li>
                <Link to="">Editar 2</Link>
              </li>
              <li>
                <Link to="">Editar 3</Link>
              </li>
              <li>
                <Link to="">Editar 4</Link>
              </li>
              <li>
                <Link to="">Editar 5</Link>
              </li>
            </ul> */}

            <ul className="box">
              <li className="link__name">Social</li>
              <li>
                <a
                  href={"https://twitter.com/observatoriotma"}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-twitter"></i> Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-details">
          <div className="bottom_text">
            <p>
              Copyright &copy; 2022 -<Link to=""> OCTMA</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
