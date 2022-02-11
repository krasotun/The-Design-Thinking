// TABS
// Выбираем табы в секции Marketing
// Используем event-delegation
// Чтобы не вешать на каждый таб свой EvenTlistner
// Мы вешаем  их на контейнер

// Выбираем контейнер с табами
const marketingTabContainer = document.querySelector('.tab__container_place_marketing');

// Выбираем ВСЕ табы в контейнере (придет Node список)
const marketingTabs = document.querySelectorAll('.tab_place_marketing');

// Выбираем все контейнеры для статьи (придет Node список)
const marketingArticlesContainers = document.querySelectorAll('.strategy__container');

// Функция скрывает ВСЕ статьи (добавляя класс к контейнеру)
const hideArticles = function () {
  marketingArticlesContainers.forEach(article => {
    article.classList.add('strategy__container_hidden');
  });
};

// Функция показывает ВСЕ  статьи
const showArticles = function () {
  marketingArticlesContainers.forEach(article => {
    article.classList.remove('strategy__container_hidden');
  });
};


// Функция убирает selected у всех табов, у кого он есть
const removeMarketingSelectedClass = function () {
  marketingTabs.forEach(tab => {
    if (tab.classList.contains('tab_selected')) {
      tab.classList.remove('tab_selected');
    }
  });
};


// Пишем функцию для переключения статей по выбранному тегу
const selectArticlesByTag = function () {
  marketingTabContainer.addEventListener('click', (e) => { // (e) это Event клик
    if (e.target.classList.contains("tab")) { // Мы обрабатываем событие клик и берем из него параметры (target)
      let clickedTag = e.target;
      removeMarketingSelectedClass(); // Убираем selected
      toggleMarketingTag(clickedTag); // Вызываем функцию для toggle класса (выделение цвета)
      hideArticles(); // Скрываем все статьи
      marketingArticlesContainers.forEach(article => { // Перебираем все статьи
        article.querySelectorAll('.tab_place_strategy').forEach(tag => { // Перебираем все теги в каждой статье
          if (tag.innerText === e.target.innerText) { // Сравниваем выбранный тег с тегом статьи
            article.classList.remove('strategy__container_hidden'); // если совпадает то показываем статью
          } else if (e.target.innerText === 'All') { // Если клик по табу All
            showArticles(); // показываем все статьи
          }
        });
      });
    }
  });
};
selectArticlesByTag(); // Вызываем функцию

// Пишем функцию по замене класса у кликнутого тэга
const toggleMarketingTag = function (a) {
  a.classList.toggle('tab_selected');
};



// MODALS
// Выбираем контейнер со статьями
const articlesContainer = document.querySelector('.marketing__strategies-container');
// Пишем функцию для Парсинга клика именно по тегу (Event delegation)
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
