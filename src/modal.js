const addMultipleEventListener = (element, events, handler) => {
  events.forEach((e) => element.addEventListener(e, handler));
};

const showModal = (titleHtml, contentHtml, images) => {
  const modal = document.createElement("div");

  modal.classList.add("modal");
  modal.innerHTML = `
        <div class="modal__inner flex">
            <div class="modal__top flex">
                <h2 class="modal__title">${titleHtml}</h2>
                <button class="modal__close" type="button">
                    <span class="material-icons">close</span>
                </button>
            </div>
            <div class="modal__content">${contentHtml}</div>
            <div class="modal__bottom"></div>
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
    cardImg.addEventListener("click", () => {
      const lightbox = document.createElement("div");
      lightbox.classList.add("modal__lightbox");
      lightbox.innerHTML = `<img src:${image.lightbox_src} srcset:${image.lightbox_srcset} class="modal__lightbox-img"/>`;

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

  //   addMultipleEventListener(
  //     modal,
  //     ["backbutton"],
  //     () => {
  //       document.body.removeChild(modal);
  //     }
  //   );

  // Cerrar modal.
  modal.querySelector(".modal__close").addEventListener(
    "click",
    () => {
      document.body.removeChild(modal);
    },
    true
  );
  document.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Escape") {
        document.body.removeChild(modal);
      }
    },
    true
  );
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      document.body.removeChild(modal);
    }
  });
};

// Carrozados Modal.

const btnCampers = document.querySelector("#btn-campers");
const btnMotorhome = document.querySelector("#btn-motorhome");
const btnTaller = document.querySelector("#btn-taller");
const btnRemolques = document.querySelector("#btn-remolques");

btnCampers.addEventListener("click", () => {
  showModal("CAMPERS", "<p>I am the content of this modal</p>", [
    {
      leyend: "Camper 1",
      src: "./images/icons/camera.svg",
    },
    {
      leyend: "Camper 1",
      src: "./images/icons/camera.svg",
    },
    {
      leyend: "Camper 1",
      src: "./images/icons/camera.svg",
    },
    {
      leyend: "Camper 1",
      src: "./images/icons/camera.svg",
    },
    {
      leyend: "Camper 1",
      src: "./images/icons/camera.svg",
    },
  ]);
});
