import React from "react";

export default function Filters({ title }) {
  return (
    <>
      <div className="left-section filtros">
        <h3 className="left-title">
          Filtros <span>{title}</span>
        </h3>
        <div className="buttons-wrapper">
          <button className="btn-reset">Todos</button>
          <button className="btn-reset">2021</button>
          <button className="btn-reset">2022</button>
          <button className="btn-reset">2023</button>
          <button className="btn-reset">2024</button>
          <button className="btn-reset">2025</button>
        </div>
      </div>
    </>
  );
}
