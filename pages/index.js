//кнопка для открытия/скрытия сайдбара
const button = document.getElementById('hamburger-menu'),
    span = button.getElementsByTagName('span')[0];

button.onclick = function () {
    span.classList.toggle('hamburger-menu-button-close');
};

//открытие/скрытие сайдбара
const sidebarToggle = document.querySelector('.hamburger-menu-button');
const sidebar = document.querySelector('.sidebar');
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar_active');
} )
