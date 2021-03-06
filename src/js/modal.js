const showModal = (titleHtml, contentHtml, images) => {
  const modal = document.createElement("div");

  modal.classList.add("modal");
  modal.innerHTML = `
        <div class="modal__inner flex">
            <div class="modal__top flex">
                <h2 class="modal__title">${titleHtml}</h2>
                <button class="modal__close material-icons md-36" type="button">
                    close
                </button>
            </div>
            <div class="modal__content">${contentHtml}</div>
            <div class="modal__bottom flex"></div>
        </div>
    `;

  // Crear tarjeta para cada imagen.
  for (const image of images) {
    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardLeyend = document.createElement("p");

    card.classList.add("modal__card-container");
    cardImg.classList.add("modal__card-image");
    cardLeyend.classList.add("modal__card-leyend");

    cardLeyend.textContent = image.leyend;
    cardImg.src = image.src;

    card.appendChild(cardImg);
    card.appendChild(cardLeyend);
    modal.querySelector(".modal__bottom").appendChild(card);

    // Crear imagen en tamaño completo.
    card.addEventListener("click", () => {
      const lightbox = document.createElement("div");
      const lightboxImg = document.createElement("img");

      lightbox.classList.add("modal__lightbox");
      lightboxImg.classList.add("modal__lightbox-img");
      lightboxImg.src = image.src;

      lightbox.appendChild(lightboxImg);
      document.body.appendChild(lightbox);
      lightbox.addEventListener(
        "click",
        () => {
          document.body.removeChild(lightbox);
        },
        { once: true }
      );
    });
  }

  document.body.appendChild(modal);
  setTimeout(() => {
    modal.style.opacity = "1";
    document.body.style.overflowY = "hidden";
  });

  // Cerrar modal.
  modal.querySelector(".modal__close").addEventListener(
    "click",
    () => {
      document.body.removeChild(modal);
      document.body.style.overflowY = "scroll";
    },
    true
  );
  document.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Escape") {
        document.body.removeChild(modal);
        document.body.style.overflowY = "scroll";
      }
    },
    true
  );
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      document.body.removeChild(modal);
      document.body.style.overflowY = "scroll";
    }
  });
};

// Carrozados Modal.

// btnCampers.addEventListener("click", () => {
//   showModal("CAMPERS", "<p>Descripcion de los campers.</p>", [
//     {
//       leyend: "Camper 1",
//       src: "./src/images/carrozados/campers/camper.webp",
//     },
//     {
//       leyend: "Camper 1",
//       src: "./src/images/carrozados/campers/camper.webp",
//     },
//     {
//       leyend: "Camper 1",
//       src: "./src/images/carrozados/campers/camper.webp",
//     },
//     {
//       leyend: "Camper 1",
//       src: "./src/images/carrozados/campers/camper.webp",
//     },
//     {
//       leyend: "Camper 1",
//       src: "./src/images/carrozados/campers/camper.webp",
//     },
//     {
//       leyend: "Camper 1",
//       src: "./src/images/carrozados/campers/camper.webp",
//     },
//   ]);
// });

// export { showModal };
