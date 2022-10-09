import React from "react";
import { map } from "lodash";

import logo_1 from "../../../../../assets/logos/socios_activos/1.jpg";
import logo_2 from "../../../../../assets/logos/socios_activos/2.jpg";
import logo_3 from "../../../../../assets/logos/socios_activos/3.jpg";
import logo_4 from "../../../../../assets/logos/socios_activos/4.jpg";
import logo_5 from "../../../../../assets/logos/socios_activos/5.jpg";
import logo_6 from "../../../../../assets/logos/socios_activos/6.jpg";

export default function Socios() {
  const logos = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6];
  return (
    <>
      <section className="socios mx-w">
        <div className="bg-title-t1"></div>
        <div className="title-t1">
          <h2>Socios Activos</h2>
          <p>
            Conoce nuestra lista de socios activos, que juegan un papel
            importante dentro de nuestro trabajo.
          </p>
        </div>

        <div className="wrapper-logos">
          {map(logos, (logo, index) => (
            <div className="item">
              <img src={logo} alt={`logo ${index}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
