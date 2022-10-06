import React from "react";
import { Link } from "react-router-dom";

import Navigation from "./BtnNavigation.jsx";

import {
  getDateMonth,
  getDateYear,
  setDateFormat,
} from "../../../../../tools/setDate.tools.js";

export default function ItemSlider(props) {
  const { slide, index, slides, currentSlide, setCurrentSlide } = props;

  console.log(slide);
  return (
    <>
      <div
        className={
          index === currentSlide ? "carousel-item active" : "carousel-item"
        }
      >
        <div className="content-slide">
          <div className="left">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>

            <Link to="">Más Información</Link>
          </div>
          <div className="right">
            <Navigation
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              data={slides}
            />
            <div className="cont-img">
              <div className="overlay">
                <div className="date">
                  <span>{getDateMonth(slide.createdAt)}</span>
                  <span>
                    -{getDateYear(slide.createdAt).toString().slice(2, 4)}
                  </span>
                </div>
              </div>

              <img src={slide.thumbnail} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
