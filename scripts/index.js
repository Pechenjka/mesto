let body = document.querySelector(".body");
//profileEditButton - кнопка редактирования профиля
let profileEditButton = document.querySelector(".profile__edit-button");
//popup - всплывающее окно
let popup = document.querySelector(".popup");
//popupCloseButton - кнопка закрытия редактирования профиля
let popupCloseButton = popup.querySelector(".popup__close-button");
//Функция - для открывания popup (всплывающее окно)
function popupToggle() {
  popup.classList.toggle("popup_opened");
  body.classList.toggle("body_if-popup-opened");
}
//Подключаем слушатель для переменной profileEditButton (кнопка с классом .profile__edit-button)
profileEditButton.addEventListener("click", popupToggle);

//Подключаем слушатель для переменной popupCloseButton (кнопка с классом .popup__close-button)
popupCloseButton.addEventListener("click", popupToggle);
// Создание одноименных переменных для классов элементов
let popupForm = popup.querySelector(".popup__form");
let inputSubmitButton = popup.querySelector(".popup__submit-button");
let nameAuthor = popupForm.querySelector(".popup__form-name-author");
let aboutAuthor = popupForm.querySelector(".popup__form-about-author");
let profileTitle = document.querySelector(".profile__title");
let profileAboutAuthor = document.querySelector(".profile__about-author");
//Функция вывода данных через input в профиль автора
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameAuthor.value;
  profileAboutAuthor.textContent = aboutAuthor.value;
}
//Подключаем слушатель для переменной popupForm (со значаниями: отправить(submit), и функцией вывода данных: formSubmitHandler)
popupForm.addEventListener("submit", formSubmitHandler);
//Подключаем слушатель для переменной inputSubmitButton (кнопка с классом .popup__submit-button), для закрывания pop up (всплывающее окно) при отправке данных через кнопку "сохранить"
inputSubmitButton.addEventListener("click", popupToggle);
