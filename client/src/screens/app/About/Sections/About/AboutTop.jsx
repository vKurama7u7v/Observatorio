import React from "react";

export default function AboutTop() {
  return (
    <>
      <section className="about-1 pt-nav">
        <div className="wrapper mx-w">
          <div className="left">
            <div className="cont_img">
              <div className="overlay"></div>
              <img
                src="https://i.picsum.photos/id/1036/900/400.jpg?hmac=-J8HWH1fEmW3OMmInQ5yWX3BIEU5Yte8oh_w_ezlQYc"
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>¿Quienes Somos?</h1>
            <p>
              Somos una organización encargada de recopilar, analizar,
              estructurar y difundir reportes estadísticos de los temas que más
              interesan a la población de la Zona Sur de Tamaulipas.{" "}
            </p>

            <p>
              Buscamos proveer de información objetiva, cuantificable y
              confiable para que las distintas expresiones de la sociedad civil
              cuenten con información confiable que vaya más allá de la mera
              percepción o la información de primera mano y de esta manera
              unificar criterios y generar una sinergia en los esfuerzos
              individuales que ya se vienen realizando por una gran cantidad de
              organizaciones e instituciones.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
