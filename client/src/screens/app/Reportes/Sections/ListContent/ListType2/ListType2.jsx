import React from "react";
import Item from "./Item.jsx";

export default function ListType2({ data, pagina, porPagina }) {
  return (
    <>
      <div className="left list-content-type-2">
        {data
          .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
          .map((item, index) => (
            <Item data={item} index={index} />
          ))}
      </div>
    </>
  );
}
