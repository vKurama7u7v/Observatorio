import React, { useEffect, useState } from "react";
import { map } from "lodash";

import Item from "./Item.jsx";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      title: "Misión",
      content: `Recopilar, analizar, estructurar y difundir reportes estadísticos de los temas que más interesan a la población de la Zona Sur de Tamaulipas, en específico de los municipios de Tampico, Madero y Altamira.
      Debido a la coyuntura de inseguridad que vive la Zona Conurbada, el OCTMA se enfocará de inicio en el desarrollo de reportes periódicos sobre los principales delitos, específicamente del homicidio doloso, el homicidio culposo, la extorsión, el secuestro, el robo con violencia, el robo a casa habitación, el robo de vehículo y el robo a negocio.`,
      image: `https://i.picsum.photos/id/1036/900/400.jpg?hmac=-J8HWH1fEmW3OMmInQ5yWX3BIEU5Yte8oh_w_ezlQYc`,
    },

    {
      title: "Visión",
      content: `Ser la referencia a nivel regional en la provisión de estadísticas confiables y del análisis de los principales temas relacionados con el desarrollo económico y social de la Zona Conurbada de Tampico, Madero y Altamira.`,
      image: `https://i.picsum.photos/id/1036/900/400.jpg?hmac=-J8HWH1fEmW3OMmInQ5yWX3BIEU5Yte8oh_w_ezlQYc`,
    },

    {
      title: "Objetivo",
      content: `Recopilar, analizar, difundir información oficial y generar datos primarios a partir de instrumentos propios como encuestas, entrevistas y estudios hemerográficos, con la finalidad de complementar la información que fluye de las fuentes oficiales y proveer de información objetiva, cuantificable y confiable para que las distintas expresiones de la sociedad civil cuenten con información confiable que vaya más allá de la mera percepción o la información de primera mano y de esta manera unificar criterios y generar una sinergia en los esfuerzos individuales que ya se vienen realizando por una gran cantidad de organizaciones e instituciones.`,
      image: `https://i.picsum.photos/id/1036/900/400.jpg?hmac=-J8HWH1fEmW3OMmInQ5yWX3BIEU5Yte8oh_w_ezlQYc`,
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < data.length - 1 ? currentSlide + 1 : 0
      );
    }, 8000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <>
      <section className="about-2 mx-w">
        <div className="wrapper">
          <div
            className="carousel-inner"
            style={{ transform: `translateX(${-currentSlide * 100}%)` }}
          >
            {map(data, (item, index) => (
              <Item
                data={item}
                max={data}
                index={index}
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
