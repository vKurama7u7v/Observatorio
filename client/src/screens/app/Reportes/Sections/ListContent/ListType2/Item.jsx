import React from "react";
import { Link } from "react-router-dom";

import { setDateFormat } from "../../../../../../tools/setDate.tools.js";

export default function Item({ data }) {
  return (
    <>
      <div className="item">
        <div className="cont-img">
          <div className="overlay"></div>
          <img src={data.thumbnail} alt="" width={"100px"} />
        </div>

        <div className="content">
          <div className="info">
            <span className="category">Categoría</span>
            <span className="date">{setDateFormat(data.createdAt)}</span>
          </div>
          <div className="description">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
          <div className="bottom-options">
            <div className="options-left">
              <Link>
                {data.id} Leer Más <i className="bx bx-chevrons-right"></i>
              </Link>
            </div>
            <div className="options-right"></div>
          </div>
        </div>
      </div>
    </>
  );
}
