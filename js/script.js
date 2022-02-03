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
  console.log(marketingArticle[0].childNodes[5].childNodes);
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
