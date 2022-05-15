const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".btn-mobile-nav-toggle");
const home = document.querySelector("#home");
const carrozados = document.querySelector("#carrozados");
const accesorios = document.querySelector("#accesorios");
const contacto = document.querySelector("#contacto");
const btnContacto = document.querySelector(".btn-contact");
const carousel = document.querySelector(".carousel");
const slider = document.querySelector(".slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const btnCampers = document.querySelector("#btn-campers");
const btnMotorhome = document.querySelector("#btn-motorhome");
const btnTaller = document.querySelector("#btn-taller");
const btnRemolques = document.querySelector("#btn-remolques");

// Mobile Nav Bar.

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.textContent = "close";
    window.addEventListener(
      "click",
      (e) => {
        if (e.target != navToggle) {
          primaryNav.setAttribute("data-visible", "false");
          navToggle.setAttribute("aria-expanded", "false");
          navToggle.textContent = "menu";
        }
      },
      true
    );
  }
  if (visibility === "true") {
    primaryNav.setAttribute("data-visible", "false");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.textContent = "menu";
  }
});

// Hero Carousel.

let direction;

next.addEventListener("click", () => {
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = "translate(-20%)";
});

prev.addEventListener("click", () => {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translate(20%)";
});

slider.addEventListener(
  "transitionend",
  () => {
    // get the last element and append it to the front

    if (direction === 1) {
      slider.prepend(slider.lastElementChild);
    } else {
      slider.appendChild(slider.firstElementChild);
    }

    slider.style.transition = "none";
    slider.style.transform = "translate(0)";
    setTimeout(() => {
      slider.style.transition = "transform 500ms ease-in-out";
    });
  },
  false
);

// Esconder boton de Contacto en seccion Contacto.

window.addEventListener("scroll", () => {
  if (contacto.getBoundingClientRect().top < 30) {
    btnContacto.classList.add("hidden");
  }
  if (contacto.getBoundingClientRect().top > 30) {
    btnContacto.classList.remove("hidden");
  }
});

//

btnCampers.addEventListener("click", () => {
  window.location.href = "./src/campers.html";
});
btnMotorhome.addEventListener("click", () => {
  window.location.href = "./src/motorhome.html";
});
btnTaller.addEventListener("click", () => {
  window.location.href = "./src/taller.html";
});
