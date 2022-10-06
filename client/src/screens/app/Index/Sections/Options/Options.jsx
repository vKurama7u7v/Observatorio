import React from "react";
import { Link } from "react-router-dom";

import "./options.styles.css";

export default function Options() {
  return (
    <>
      <section className="home-options mx-w">
        <div className="wrapper">
          <div className="item">
            <div className="content">
              <h3>Publicaciones</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                tempore sint ut rem hic, animi, quidem culpa qui omnis neque
                natus dolores deleniti ad atque tenetur, dicta eaque adipisci
                molestias. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. A laboriosam aliquid molestiae eum ipsa consectetur! Alias
                voluptates doloribus quos cum hic! Labore, laboriosam cumque
                doloremque corrupti deserunt officiis autem veritatis?
              </p>
              <Link to="">Más Información</Link>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <h3>Proyectos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
                tempore sint ut rem hic, animi, quidem culpa qui omnis neque
                natus dolores deleniti ad atque tenetur, dicta eaque adipisci
                molestias.
              </p>
              <Link to="">Más Información</Link>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <h3>Observatorio</h3>
              <p>
                El Observatorio Ciudadano Tampico, Madero, Altamira A.C. se
                forma gracias al patrocinio y liderazgo del Consejo de
                Instituciones Empresariales del Sur de Tamaulipas y las
                Huastecas (CIESTH), organismo que constituye la principal cúpula
                empresarial de la región
              </p>
              <Link to="">Más Información</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
