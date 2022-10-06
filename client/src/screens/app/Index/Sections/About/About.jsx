import React from "react";
import { Link } from "react-router-dom";

import "./about.styles.css";

export default function About() {
  return (
    <>
      <section className="home2 mx-w">
        <div class="wrapper">
          <div class="left">
            <div class="container__img">
              <img
                src="https://picsum.photos/id/1033/900/400"
                alt=""
                height="300px"
              />
            </div>
          </div>
          <div class="right">
            <h2>OBSERVATORIO CIUDADANO</h2>
            <p class="paragraph">
              La misión principal del OCTMA es la de recopilar, analizar,
              estructurar y difundir reportes estadísticos de los temas que más
              interesan a la población de la Zona Sur de Tamaulipas, en
              específico de los municipios de Tampico, Madero y Altamira.
            </p>
            <p class="link-center">
              <Link to="">LEER MÁS</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
