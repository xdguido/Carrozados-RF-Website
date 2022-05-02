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
