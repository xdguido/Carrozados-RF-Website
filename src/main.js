// Mobile Nav Bar.

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".btn-mobile-nav-toggle");

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

const carousel = document.querySelector(".carousel");
const slider = document.querySelector(".slider");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
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

// Menu desplegable.

// if (box.getBoundingClientRect().top < window.innerHeight)

// window.addEventListener("scroll", () => {
//   console.log(window.innerHeight);
//   console.log(sectionCarrozados.getBoundingClientRect().bottom);
//   console.log(getElemDistance(sectionCarrozados));
// });

// const btnCampers = document.querySelector("#btn-campers");
// const btnMotorhome = document.querySelector("#btn-motorhome");
// const btnTaller = document.querySelector("#btn-taller");
// const btnRemolques = document.querySelector("#btn-remolques");

// const cardCampers = document.querySelector("#card-campers");
// const cardMotorhome = document.querySelector("#card-motorhome");
// const cardTaller = document.querySelector("#card-taller");
// const cardRemolques = document.querySelector("#card-remolques");

// const sectionCarrozados = document.querySelector("#carrozados");

// const scrollAuto = () => {
//   window.scrollBy(0, sectionCarrozados.getBoundingClientRect().bottom);
// };

// const resetCards = () => {
//   document.querySelectorAll(".card-details__content").forEach((card) => {
//     card.classList.remove("card-details__content--active");
//   });
// };

// document.querySelectorAll(".btn__card").forEach((button) => {
//   button.addEventListener("click", (e) => {
//     resetCards();
//     if (e.target.id === "btn-campers") {
//       cardCampers.classList.add("card-details__content--active");
//       scrollAuto();
//     }
//     if (e.target.id === "btn-motorhome") {
//       cardMotorhome.classList.add("card-details__content--active");
//       scrollAuto();
//     }
//     if (e.target.id === "btn-taller") {
//       cardTaller.classList.add("card-details__content--active");
//       scrollAuto();
//     }
//     if (e.target.id === "btn-remolques") {
//       cardRemolques.classList.add("card-details__content--active");
//       scrollAuto();
//     }
//   });
// });
