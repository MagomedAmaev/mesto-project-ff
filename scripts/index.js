// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardsContainer = document.querySelector(".places__list");

function createCard(cardData, removeCard) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.cloneNode(true).querySelector(".places__item");

  cardElement.querySelector(".card__image").src = cardData.link;
  cardElement.querySelector(".card__image").alt = cardData.name;
  cardElement.querySelector(".card__title").textContent = cardData.name;

  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => removeCard(cardElement));

  return cardElement;
}

function removeCard(card) {
  card.remove();
}
initialCards.forEach((cardData) => {
  const newCard = createCard(cardData, removeCard);
  cardsContainer.append(newCard);
});

