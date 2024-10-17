//*Cambio de cantidad de artículos ingresado por el usuario

let minusBtn = document.querySelector(".input__minus");
let plusBtn = document.querySelector(".input__plus");
let userInput = document.querySelector(".input__number");

let userInputNumber = 0;

// Aumentar la cantidad
plusBtn.addEventListener("click", () => {
  userInputNumber++;
  userInput.value = userInputNumber;
});

// Disminuir la cantidad
minusBtn.addEventListener("click", () => {
  userInputNumber--;
  if (userInputNumber <= 0) {
    userInputNumber = 0;
  }
  userInput.value = userInputNumber;
});

//*Agregar el total de productos al carrito cuando se presiona el botón ADD TO CART

const addToCartBtn = document.querySelector(".details__button");
let cartNotification = document.querySelector(".header__cart--notification");
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener("click", () => {
  lastValue = lastValue + userInputNumber;

  cartNotification.innerText = lastValue;
  cartNotification.style.display = "block";
  drawProductInModal();
});

//*Mostrar el modal con el detalle del carrito

const cartIconBtn = document.querySelector(".header__cart");
const cartModal = document.querySelector(".cart-modal");

const productContainer = document.querySelector(
  ".cart-modal__checkout-container"
);

cartIconBtn.addEventListener("click", () => {
  //cartModal.style.display = "block";
  cartModal.classList.toggle("show");

  if (lastValue === 0) {
    productContainer.innerHTML =
      '<p class="cart-empty">Your cart is empty </p>';
  } else {
    drawProductInModal();
  }
});

//*Borrar el contenido del carrito

function deleteProduct() {
  const deleteProductBtn = document.querySelector(".cart-modal__delete");

  deleteProductBtn.addEventListener("click", () => {
    cartNotification.style.display = "none";
    productContainer.innerHTML =
      '<p class="cart-empty">Your cart is empty </p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
  });
}

//*Cambiar imágenes cuando se presione los botones flecha.
const imageContainer = document.querySelector(".gallery__image-container");
const previousGalleryBtn = document.querySelector(".gallery__previous");
const nextGalleryBtn = document.querySelector(".gallery__next");
let imgIndex = 1;

const imagesUrls = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
previousGalleryBtn.addEventListener("click", () => {
  changePreviousImage(imageContainer);
});

nextGalleryBtn.addEventListener("click", () => {
  changeNextImage(imageContainer);
});

//* Mostrar el modal de imagenes cuando hago click en la imagen principal
const imagesModal = document.querySelector(".modal-gallery__background");
const closeModalBtn = document.querySelector(".modal-gallery__close");

imageContainer.addEventListener("click", () => {
  imagesModal.style.display = "grid";
});

closeModalBtn.addEventListener("click", () => {
  imagesModal.style.display = "none";
});

//*Cambiar las imágenes principales desde los thumbnails
let thumbnails = document.querySelectorAll(".gallery__thumnail");
thumbnails = [...thumbnails];
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (event) => {
    imageContainer.style.backgroundImage = `url('./images/image-product-${event.target.id}.jpg')`;
  });
});

//*Cambiar las imágenes principales desde los thumbnails en el Modal
let modalthumbnails = document.querySelectorAll(".modal-gallery__thumnail");
const modalImageContainer = document.querySelector(
  ".modal-gallery__image-container"
);
modalthumbnails = [...modalthumbnails];

modalthumbnails.forEach((modalthumbnail) => {
  modalthumbnail.addEventListener("click", (event) => {
    modalImageContainer.style.backgroundImage = `url('./images/image-product-${event.target.id.slice(
      -1
    )}.jpg')`;
  });
});

//* Cambair imagen principal de modal desde flechas en el modal
const previousModalBtn = document.querySelector(".modal-gallery__previous");
const nextModalBtn = document.querySelector(".modal-gallery__next");

previousModalBtn.addEventListener("click", () => {
  changePreviousImage(modalImageContainer);
});

nextModalBtn.addEventListener("click", () => {
  changeNextImage(modalImageContainer);
});

//*Mostrar el navbar cuando presiono el menu de hamburguesa

const hamburgerMenu = document.querySelector(".header__menu");
const modalNavbar = document.querySelector(".modal-navbar__background");
const closeModalNavbar = document.querySelector(".modal-navbar__close-icon");

hamburgerMenu.addEventListener("click", () => {
  modalNavbar.style.display = "block";
});

closeModalNavbar.addEventListener("click", () => {
  modalNavbar.style.display = "none";
});

//*FUNCIONES

function drawProductInModal() {
  productContainer.innerHTML = ` <div class="cart-modal__details-container">
    <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
    <div>
      <p class="cart-modal__product">Autumn Limited Edition...</p>
<p class="cart-modal__price"> $125.00 x 3  <span>$375.00</span></p>
    </div>
    <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
  </div>
  <button class="cart-modal__chekount">Checkout </button>`;

  deleteProduct();
  let priceModal = document.querySelector(".cart-modal__price");
  priceModal.innerHTML = `$125.00 x${lastValue}  <span>${
    lastValue * 125
  }.00</span>`;
}

function changeNextImage(imgContainer) {
  if (imgIndex === 4) {
    imgIndex = 1;
  } else {
    imgIndex++;
  }

  if (imgIndex > imagesUrls.length) {
    imgIndex = 1;
  }
  imgContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`;
}

function changePreviousImage(imgContainer) {
  if (imgIndex === 1) {
    imgIndex = 4;
  } else {
    imgIndex--;
  }
  imgContainer.style.backgroundImage = `url('./images/image-product-${imgIndex}.jpg')`;
}
