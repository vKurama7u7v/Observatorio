import React, { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import Error from "../../components/Errors/Error.jsx";

import Slider from "./Sections/Slider/Slider.jsx";
import About from "./Sections/About/About.jsx";
import Options from "./Sections/Options/Options.jsx";

import process from "../../../tools/config.tools.json";

export default function Index(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [dataReportes, setDataReportes] = useState(null);

  useEffect(() => {
    fetch(`${process.DJANGO_REST_API}/${"reportes"}`)
      .then((res) => res.json())
      .then((data) => {
        setDataReportes(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loading />;

  if (!dataReportes) {
    return <Error />;
  }

  return (
    <>
      <Navbar />
      <main className="">
        <Slider data={dataReportes} />
        <About />
        <Options />
      </main>
      <Footer />
    </>
  );
}
