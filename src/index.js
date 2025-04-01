import { initialCards } from "./components/cards.js";
import { createCard, removeCard, toggleLike } from "./components/card.js";
import {
  openPopup,
  closePopup,
  closePopupByEsc,
  closePopupByOverlay,
} from "./components/modal.js";
import "./pages/index.css";

// DOM-элементы

const cardsContainer = document.querySelector(".places__list");
const popupImage = document.querySelector(".popup_type_image");
const popupElement = popupImage.querySelector(".popup__image");
const popupCaption = popupImage.querySelector(".popup__caption");

const editPopup = document.querySelector(".popup_type_edit");
const newCardPopup = document.querySelector(".popup_type_new-card");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closeButtons = document.querySelectorAll(".popup__close");

const editProfileForm = document.querySelector('form[name="edit-profile"]');
const nameInput = editProfileForm.querySelector(".popup__input_type_name");
const jobInput = editProfileForm.querySelector(
  ".popup__input_type_description"
);

const cardForm = document.querySelector('form[name="new-place"]');
const cardNameInput = document.querySelector(".popup__input_type_card-name");
const urlInput = document.querySelector(".popup__input_type_url");

//  Функции

function openImagePopup(cardData) {
  // открытие попапа изображения
  popupElement.src = cardData.link;
  popupElement.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openPopup(popupImage);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;

  closePopup(editPopup);
}

// Слушатели событий

document.addEventListener("click", closePopupByOverlay);

document.addEventListener("click", closePopupByEsc);

editButton.addEventListener("click", function () {
  nameInput.value = document.querySelector(".profile__title").textContent;
  jobInput.value = document.querySelector(".profile__description").textContent;
  openPopup(editPopup);
});

addButton.addEventListener("click", function () {
  openPopup(newCardPopup);
});

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

cardForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const newCardData = {
    name: cardNameInput.value,
    link: urlInput.value,
  };

  const newCard = createCard(
    newCardData,
    removeCard,
    toggleLike,
    openImagePopup
  );
  cardsContainer.prepend(newCard);

  closePopup(newCardPopup);
  cardForm.reset();
});

initialCards.forEach((cardData) => {
  const newCard = createCard(cardData, removeCard, toggleLike, openImagePopup);
  cardsContainer.append(newCard);
});

closeButtons.forEach(function (button) {
  button.addEventListener("click", function (evt) {
    closePopup(evt.target.closest(".popup"));
  });
});
