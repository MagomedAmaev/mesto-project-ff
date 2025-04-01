export function createCard(cardData, removeCard, likeCard, openImagePopup) {
    const cardTemplate = document.querySelector("#card-template").content;
    const cardElement = cardTemplate.cloneNode(true).querySelector(".places__item");
  
    const cardImage = cardElement.querySelector(".card__image");
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardElement.querySelector(".card__title").textContent = cardData.name;
  
    const deleteButton = cardElement.querySelector(".card__delete-button");
    deleteButton.addEventListener("click", () => removeCard(cardElement));
  
    const likeButton = cardElement.querySelector(".card__like-button");
    likeButton.addEventListener("click", likeCard);
  
    cardImage.addEventListener('click', () => openImagePopup(cardData));
  
    return cardElement;
  }
  // функция удаления карточки
  export function removeCard(card) {
    card.remove();
  }
  // функция добавления и удаления лайка
  export function toggleLike(evt) {
    evt.target.classList.toggle("card__like-button_is-active");
  }