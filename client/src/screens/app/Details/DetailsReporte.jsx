import React from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import Base from "./Entrada.jsx";

export default function DetailsReporte() {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <Base id={id} route={"reportes"} />
      <Footer />
    </>
  );
}
