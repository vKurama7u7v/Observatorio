import React from "react";
import { setDateFormat } from "../../../../../../tools/setDate.tools.js";

import { Link } from "react-router-dom";

export default function Item({ data }) {
  return (
    <>
      <div className="item">
        <div className="cont-img">
          <div className="overlay"></div>
          <img src={data.thumbnail} alt="" width={"100px"} />
        </div>

        <div className="content">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
          <div className="bottom">
            <div className="options">
              <Link className="btn-reset btn">Ver Más</Link>
              <Link className="btn-reset btn">Descargar</Link>
            </div>
            <span className="date">{setDateFormat(data.createdAt)}</span>
          </div>
        </div>
      </div>
    </>
  );
}
