window.onload = function () {
  console.log("Cargando JS: home-slider.js");

  const btns = document.querySelectorAll(".nav-btn");
  const slides = document.querySelectorAll(".content-slide");

  var sliderHome = function (manual) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    slides.forEach((slide) => {
      slide.classList.remove("slide-active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("slide-active");
  };

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      sliderHome(i);
    });
  });
};
