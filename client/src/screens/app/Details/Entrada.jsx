import React, { useEffect, useState } from "react";
import { setDateFormat } from "../../../tools/setDate.tools.js";

import Loading from "../../components/Loading/Loading.jsx";
import Error from "../../components/Errors/Error.jsx";

import Banner from "../Reportes/Sections/Banner/Banner.jsx";

import process from "../../../tools/config.tools.json";

import "./entrada.styles.css";

export default function Entrada({ id, route }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.DJANGO_REST_API}/${route}/${id}`)
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
    return <Error title={"hola"} />;
  }

  if (data.detail) {
    return <Error />;
  }

  /*
  id
  title
  description
  content
  url
  thumbnail
  status
  createdAt
  */

  return (
    <>
      <Banner img={data.thumbnail} title={data.title} text={data.description} />
      <main className="details-content">
        <section className="content mx-w">
          <div className="header-content">
            <h1>{data.title}</h1>
            <div className="details-content">
              {data.category ? (
                <>
                  <span className="categoria">{data.category} categoria</span>
                  <div className="circle"></div>
                </>
              ) : null}

              <span className="date">{setDateFormat(data.createdAt)}</span>
            </div>
          </div>
          <div className="header-line"></div>
          <div
            className="html-content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></div>
        </section>
      </main>
    </>
  );
}
