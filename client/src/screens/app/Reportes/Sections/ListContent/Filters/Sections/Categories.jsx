import React from "react";

export default function Categories({ title }) {
  return (
    <>
      <div className="left-section categorias">
        <h3 className="left-title">
          Categorías <span>{title}</span>
        </h3>
        <div className="buttons-wrapper">
          <button className="btn-reset">Todas</button>
          <button className="btn-reset">Editar 1</button>
          <button className="btn-reset">Editar 2</button>
          <button className="btn-reset">Editar 3</button>
          <button className="btn-reset">Editar 4</button>
          <button className="btn-reset">Editar 5</button>
          <button className="btn-reset">Editar 6</button>
          <button className="btn-reset">Editar 7</button>
        </div>
      </div>
    </>
  );
}
