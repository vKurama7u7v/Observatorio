import React from "react";

import "./banner.styles.css";

export default function Banner({ img, title, text }) {
  return (
    <>
      <section className="banner-reportes pt-nav">
        <div className="cont-img">
          <img src={img} alt="" />
        </div>
        <div className="content mx-w">
          <div className="text">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </section>
    </>
  );
}
