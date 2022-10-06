import React, { useState, useEffect } from "react";
import { map } from "lodash";

import Item from "./ItemSlider.jsx";

import "./slider.styles.css";

export default function Slider(props) {
  var { data: slides } = props;
  slides = slides.slice(0, 6);

  // const slides = [
  //   "https://picsum.photos/id/1032/900/400",
  //   "https://picsum.photos/id/1033/900/400",
  //   "https://picsum.photos/id/1037/900/400",
  //   "https://picsum.photos/id/1035/900/400",
  //   "https://picsum.photos/id/1036/900/400",
  //   "https://picsum.photos/id/1032/900/400",
  //   "https://picsum.photos/id/1033/900/400",
  //   "https://picsum.photos/id/1037/900/400",
  //   "https://picsum.photos/id/1035/900/400",
  //   "https://picsum.photos/id/1036/900/400",
  // ].slice(0, 6);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, 8000);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <>
      <section className="section-slider">
        <div className="container-slider mx-w">
          <div className="carousel">
            <div
              className="carousel-inner"
              style={{ transform: `translateX(${-currentSlide * 100}%)` }}
            >
              {map(slides, (slide, index) => (
                <Item
                  slide={slide}
                  slides={slides}
                  index={index}
                  currentSlide={currentSlide}
                  setCurrentSlide={setCurrentSlide}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
