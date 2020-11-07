/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */

if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

/* кнопка для открытия/скрытия сайдбара */
const button = document.getElementById('hamburger-menu'),
    span = button.getElementsByTagName('span')[0];

button.onclick = function () {
    span.classList.toggle('hamburger-menu-button-close');
};

/* открытие/скрытие сайдбара */
const sidebarToggle = document.querySelector('.hamburger-menu-button');
const sidebar = document.querySelector('.sidebar');
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar_active');
})

/* показ дополнительных карточек при нажатии на кнопку */
const showMoreCardsButton = document.querySelector('.main__button-more');
const cards = document.querySelectorAll('.card_hidden');
showMoreCardsButton.addEventListener('click', () => {
    cards.forEach(card => {
        card.classList.toggle('card_hidden');
    })
    if (showMoreCardsButton.textContent === 'Скрыть') {
        showMoreCardsButton.textContent = 'Показать еще';
        showMoreCardsButton.classList.add('main__button-more_active');
    }
    else {
        showMoreCardsButton.textContent = 'Скрыть';
        showMoreCardsButton.classList.remove('main__button-more_active');
    }
})

/* widget "Близость к место": 
изменение цвета кнопок выбора Близости к место при нажатии,
снятие выбора с других кнопок при нажатии на кнопку "Любая" 
 */
const allLocationButtons = document.querySelectorAll('.location__button');
const locationAnyButton = document.querySelector('.location__button_type_any');
/* создаем массив locationButtons, содержащий все кнопки в виджете, кроме кнопки "Любая" */
let locationButtons = [];
allLocationButtons.forEach(item => {
    if (!item.classList.contains('location__button_type_any')) {
        locationButtons.push(item);
    }
})

locationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        button.classList.toggle('location__button_active');
        if (locationAnyButton.classList.contains('location__button_active')) {
            locationAnyButton.classList.remove('location__button_active');
        }
    })
})

locationAnyButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!locationAnyButton.classList.contains('location__button_active')) {
        locationButtons.forEach(button => {
            button.classList.remove('location__button_active');
        })
        locationAnyButton.classList.toggle('location__button_active');
    }
    else {
        locationAnyButton.classList.toggle('location__button_active');
    }
})

/* изменение направления стрелки и скрытие кнопок фильтрации при клике
на заголовки формы фильтрации
 */
const widgetTitles = document.querySelectorAll('.widget__title');
widgetTitles.forEach(title => {
    title.addEventListener('click', () => {
        title.classList.toggle('widget__title_active');
        const widgetBody = title.parentNode.querySelector('.widget__body');
        widgetBody.classList.toggle('widget__body_active');
    })
})

/* открытие дополнительных опций при нажатии на кнопку формы "Показать еще"
 */

const showMoreOptionsButton = document.querySelector('.widget__show-hidden');
showMoreOptionsButton.addEventListener('click', (e) => {
    e.preventDefault();
    const additionalOptions = document.querySelector('.widget__hidden');
    additionalOptions.classList.toggle('widget__hidden_active');
    if (additionalOptions.classList.contains('widget__hidden_active')){
        showMoreOptionsButton.textContent = "Скрыть";
    }
    else {
        showMoreOptionsButton.textContent = "Показать";
    }
})