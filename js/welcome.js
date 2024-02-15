// скрыть открытие главной доски для новых пользователей
let button = document.getElementById('open-btn')// взять копку
if (window.localStorage.length === 0) { // если нет никаких данных
    button.style.display = 'none'// скрыть кнопку
} else {
    button.style.display = 'flex'// показать
}