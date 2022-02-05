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
  modalWindow.classList.add('modal__opened');
};

// Выбираем "крестик" закрытия модального окна
const modalCloseButton = document.querySelector('.modal__close');

//  Пишем функцию для закрятия модального окна
const closeModalWindow = () => {
  modalWindow.classList.remove('modal__opened');
};

modalCloseButton.addEventListener('click', closeModalWindow);
