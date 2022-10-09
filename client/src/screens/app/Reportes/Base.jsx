import React from "react";
import Component from "./Sections/ListContent/ListContent.jsx";

export default function Base() {
  return (
    <>
      <Component route={"reportes"} listType={1} nPorPagina={1} />
    </>
  );
}
