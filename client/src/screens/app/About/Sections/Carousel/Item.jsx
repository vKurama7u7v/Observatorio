import React from "react";

export default function Item(props) {
  const { data, index, currentSlide, setCurrentSlide, max } = props;
  return (
    <>
      <div
        className={
          index === currentSlide ? "carousel-item active" : "carousel-item"
        }
      >
        <div className="item">
          <div className="left">
            <div className="cont-title">
              <h3>{data.title}</h3>
            </div>
            <div className="cont-text">
              <p>{data.content}</p>
            </div>
            <button
              className="btn-reset btn-left"
              disabled={currentSlide === 0 ? true : false}
              onClick={() => setCurrentSlide(currentSlide - 1)}
            >
              <i className="bx bx-chevron-left"></i>
            </button>
            <button
              className="btn-reset btn-right"
              disabled={currentSlide >= max.length - 1 ? true : false}
              onClick={() => setCurrentSlide(currentSlide + 1)}
            >
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
          <div className="right">
            <div className="cont-img">
              <img src={data.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
