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
        <section className="banner-reportes pt-nav">
          <div className="content mx-w">banner</div>
        </section>

        <Base />
      </main>
      <Footer />
    </>
  );
}
