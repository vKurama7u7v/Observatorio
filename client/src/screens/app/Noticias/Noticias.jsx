import React from "react";
import imgBanner from "../../../assets/img/2060.png";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import Base from "../Reportes/Base.jsx";

export default function Noticias() {
  return (
    <>
      <Navbar />
      <main className="">
        <Base
          imgBanner={
            imgBanner
              ? imgBanner
              : "https://i.picsum.photos/id/1036/900/400.jpg?hmac=-J8HWH1fEmW3OMmInQ5yWX3BIEU5Yte8oh_w_ezlQYc"
          }
          title={"Noticias"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit error labore quisquam alias amet blanditiis dolores voluptatibus quod debitis nesciunt inventore adipisci culpa cumque nemo, sequi velit, pariatur totam!"
          }
          route={"noticias"}
          listType={2}
          nPorPagina={2}
          sectionBuscador={true}
          sectionFiltros={false}
          sectionCategorias={true}
          sectionRecientes={true}
        />
      </main>
      <Footer />
    </>
  );
}
