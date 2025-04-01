// функция открытия попапа
export function openPopup(popup) {
    popup.classList.add("popup_is-opened");
    document.addEventListener('keydown', closePopupByEsc);
  }
  // функция закрытия попапа
export function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener('keydown', closePopupByEsc);
  }
  // функция закрытия попапа кнопкой "Esc"
export function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector(".popup_is-opened");
      if (openedPopup) {
        closePopup(openedPopup);
      }
    }
  }

  export function closePopupByOverlay(evt) {
    if (evt.target.classList.contains('popup')) { 
      const openedPopup = document.querySelector(".popup_is-opened");
      if (openedPopup) {
        closePopup(openedPopup);
      }
    }
  }