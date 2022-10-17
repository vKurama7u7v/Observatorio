import React, { useEffect, useState } from "react";
import "./reportes.styles.css";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import Base from "./Base.jsx";

export default function Reportes() {
  return (
    <>
      <Navbar />
      <main className="">
        <Base
          imgBanner={
            "https://i.picsum.photos/id/1036/900/400.jpg?hmac=-J8HWH1fEmW3OMmInQ5yWX3BIEU5Yte8oh_w_ezlQYc"
          }
          title={"Reportes"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit error labore quisquam alias amet blanditiis dolores voluptatibus quod debitis nesciunt inventore adipisci culpa cumque nemo, sequi velit, pariatur totam!"
          }
          route={"reportes"}
          listType={1}
          nPorPagina={2}
          sectionBuscador={true}
          sectionFiltros={true}
          sectionCategorias={true}
          sectionRecientes={true}
        />
      </main>
      <Footer />
    </>
  );
}
