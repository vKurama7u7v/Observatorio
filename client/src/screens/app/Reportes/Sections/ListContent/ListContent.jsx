import React, { useEffect, useState } from "react";

import ListType1 from "./ListType1/ListType1.jsx";
import Pagination from "./Pagination/Pagination.jsx";

import Loading from "../../../../components/Loading/Loading.jsx";
import Error from "../../../../components/Errors/Error.jsx";

import process from "../../../../../tools/config.tools.json";

import "./list-content.styles.css";

export default function ListContent(props) {
  const { listType, route, nPorPagina } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(nPorPagina);

  useEffect(() => {
    fetch(`${process.DJANGO_REST_API}/${route}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loading />;

  if (!data) {
    return <Error />;
  }

  const maximo = data.length / porPagina;

  return (
    <>
      <section className="list-content mx-w">
        <div className="wrapper">
          {data ? (
            listType === 1 ? (
              <ListType1 data={data} pagina={pagina} porPagina={porPagina} />
            ) : (
              <div>tipo2</div>
            )
          ) : (
            <div className="left">No hay nd</div>
          )}
          <div className="right">
            <div className="left-section search">buscador</div>
            <div className="left-section filtros">filtros</div>
            <div className="left-section categorias">categorias</div>
            <div className="left-section recientes">recientes</div>
          </div>
        </div>

        {!data ? null : (
          <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
        )}
      </section>
    </>
  );
}
