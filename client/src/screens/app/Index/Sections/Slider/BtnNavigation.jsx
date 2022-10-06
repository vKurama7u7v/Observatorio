import React from "react";
import { map } from "lodash";

export default function BtnNavigation(props) {
  const { data, currentSlide, setCurrentSlide } = props;

  return (
    <>
      <div className="slider-navigation">
        <div className="center-items">
          <div className="options">
            {map(data, (btn, index) =>
              index === currentSlide ? (
                <div
                  className="nav-btn active"
                  index={index}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ) : (
                <div
                  className="nav-btn"
                  index={index}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
