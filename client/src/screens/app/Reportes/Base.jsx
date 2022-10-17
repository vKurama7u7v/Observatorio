import React from "react";

import Banner from "../Reportes/Sections/Banner/Banner.jsx";
import Component from "./Sections/ListContent/ListContent.jsx";

export default function Base({
  imgBanner,
  title,
  text,
  route,
  listType,
  nPorPagina,
  sectionBuscador,
  sectionFiltros,
  sectionCategorias,
  sectionRecientes,
}) {
  return (
    <>
      <Banner img={imgBanner} title={title} text={text ? text : null} />
      <Component
        route={route}
        listType={listType}
        nPorPagina={nPorPagina}
        title={title}
        sectionBuscador={sectionBuscador}
        sectionFiltros={sectionFiltros}
        sectionCategorias={sectionCategorias}
        sectionRecientes={sectionRecientes}
      />
    </>
  );
}
