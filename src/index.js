

import { initialCards, createCard, removeCard, toggleLike } from "./components/cards.js";
import { openPopup, closePopup, closePopupByEsc } from "./components/modal.js";
import './pages/index.css';

// DOM-элементы


const cardsContainer = document.querySelector(".places__list");
const popupImage = document.querySelector(".popup_type_image");
const popupElement = popupImage.querySelector('.popup__image');
const popupCaption = popupImage.querySelector(".popup__caption");

const editPopup = document.querySelector(".popup_type_edit");
const newCardPopup = document.querySelector(".popup_type_new-card");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const closeButtons = document.querySelectorAll(".popup__close");


const formElement = document.querySelector('form[name="edit-profile"]');
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");

const cardForm = document.querySelector('form[name="new-place"]');
const cardNameInput = document.querySelector(".popup__input_type_card-name");
const urlInput = document.querySelector(".popup__input_type_url");

//  Функции

function openImagePopup(cardData) {   // открытие попапа изображения
  popupElement.src = cardData.link;
  popupElement.alt = cardData.name;
  popupCaption.textContent = cardData.name;
  openPopup(popupImage); 
}

function handleFormSubmit(evt) { 
  evt.preventDefault(); 

  const nameValue = nameInput.value;
  const jobValue = jobInput.value

  const profileTitle = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");

  profileTitle.textContent = nameValue;
  profileDescription.textContent = jobValue;

  closePopup(editPopup);

}

// Слушатели событий


document.addEventListener('keydown', closePopupByEsc);


document.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup')) { 
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
});


editButton.addEventListener('click', function() {
  openPopup(editPopup);
});


addButton.addEventListener('click', function() {
  openPopup(newCardPopup);
});


formElement.addEventListener('submit', handleFormSubmit);


cardForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  const newCardData = {
    name: cardNameInput.value,
    link: urlInput.value
  }

  const newCard = createCard(newCardData, removeCard, toggleLike, openImagePopup);
  cardsContainer.prepend(newCard);

  closePopup(newCardPopup);
  cardForm.reset();
});



initialCards.forEach((cardData) => {
  const newCard = createCard(cardData, removeCard, toggleLike, openImagePopup);
  cardsContainer.append(newCard);
});

closeButtons.forEach(function(button) {
  button.addEventListener('click', function(evt) {
    closePopup(evt.target.closest(".popup"));
  });
});


