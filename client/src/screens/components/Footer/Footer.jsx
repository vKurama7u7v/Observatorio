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
              <li className="link__name">Sección 1</li>
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
            </ul>

            <ul className="box">
              <li className="link__name">Sección 2</li>
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
            </ul>

            <ul className="box">
              <li className="link__name">Sección 3</li>
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
            </ul>

            <ul className="box">
              <li className="link__name">Social</li>
              <li>
                <Link to="">
                  <i className="bx bxl-facebook"></i> Facebook
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="bx bxl-twitter"></i> Twitter
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="bx bxl-instagram"></i> Instagram
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="bx bxl-youtube"></i> YouTube
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="bx bxl-tiktok"></i> TikTok
                </Link>
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
