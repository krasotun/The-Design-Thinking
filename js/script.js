// TABS
// Выбираем табы в секции Marketing
// Используем event-delegation
// Чтобы не вешать на каждый таб свой EvenTlistner
// Мы вешаем  их на контейнер

// Выбираем контейнер с табами
const marketingTabContainer = document.querySelector('.tab__container_place_marketing');

// Выбираем ВСЕ табы в контейнере (придет Node список)
const marketingTabs = document.querySelectorAll('.tab_place_marketing');

// Выбираем все контейнеры для статьи
const marketingArticle = document.querySelectorAll('.strategy__container');

// Функция - выбираем текуцие теги у статьи
const selectCurrentArticleTag = function () {

};

selectCurrentArticleTag();

// Функция убирает selected у всех табов, у кого он есть
const removeMarketingSelectedClass = function () {
  for (let i = 0; i <= (marketingTabs.length - 1); i++) {
    if (marketingTabs[i].classList.contains('tab_selected')) {
      marketingTabs[i].classList.remove('tab_selected');
    }
  }
};

// Пишем функцию для Парсинга клика именно по тегу (Event delegation)
const parseTagFromContainer = function () {
  marketingTabContainer.addEventListener('click', (e) => { // (e) это Event клик
    if (e.target.classList.contains("tab")) { // Мы обрабатываем событие клик и берем из него параметры (target)
      let clickedTag = e.target;
      removeMarketingSelectedClass(); // Убираем selected
      toggleMarketingTag(clickedTag); // Вызываем функцию для toggle класса
    }
  });
};
parseTagFromContainer(); // Вызываем функцию

// Пишем функцию по замене класса у кликнутого тэга
const toggleMarketingTag = function (a) {
  a.classList.toggle('tab_selected');
};

// MODALS
// Выбираем контейнер со статьями
const articlesContainer = document.querySelector('.marketing__strategies-container');
// Пишем функцию для Парсинга клика
const parseArticleFromContainer = function () {
  articlesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains("strategy__container") || (e.target.classList.contains("strategy__image") || (e.target.classList.contains("strategy__title") || (e.target.classList.contains("tab_place_strategy"))))) {
      openModalWindow();
    }
  });
};

parseArticleFromContainer();

// Выбираем модальное окно
const modalWindow = document.querySelector('.modal');

//  Пишем функцию для открытия модального окна
const openModalWindow = function () {
  modalWindow.classList.add('modal_opened');
};

// Выбираем "крестик" закрытия модального окна
const modalCloseButton = document.querySelector('.modal__close-button');

//  Пишем функцию для закрытия модального окна
const closeModalWindow = () => {
  modalWindow.classList.remove('modal_opened');
};

modalCloseButton.addEventListener('click', closeModalWindow);


// Бургер меню

// Выбираем модалку с бургерным меню
const burgerMenu = document.querySelector('.burger-menu');

// Выбираем кнопку открытия
const buttonOpenBurgerMenu = document.querySelector('.burger-menu__icon_open');

// Выбираем кнопку открытия
const buttonCloseBurgerMenu = document.querySelector('.burger-menu__icon_close');


// Пишем функцию для открытия модалки с бургерным меню
// Также прячем кнопку открытия
const openBurgerMenu = function () {
  burgerMenu.classList.add('burger-menu_opened');
  buttonOpenBurgerMenu.classList.add('burger-menu__icon_hide');
};

// Пишем функцию для закрытия модалки с бургерным меню
// Возвращаем кнопку открытия
const closeBurgerMenu = function () {
  burgerMenu.classList.remove('burger-menu_opened');
  buttonOpenBurgerMenu.classList.remove('burger-menu__icon_hide');
};

// Вешаем события на кнопки
buttonOpenBurgerMenu.addEventListener('click', openBurgerMenu);
buttonCloseBurgerMenu.addEventListener('click', closeBurgerMenu);
