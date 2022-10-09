import React from "react";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import Error from "../../components/Errors/Error.jsx";

import AboutTop from "./Sections/About/AboutTop.jsx";
import Carousel from "./Sections/Carousel/Carousel.jsx";
import Socios from "./Sections/Socios/Socios.jsx";

import "./about.styles.css";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="">
        <AboutTop />

        <Carousel />

        <Socios />
      </main>
      <Footer />
    </>
  );
}
