// переключение элеменов меню
const widgets = document.getElementsByClassName('widget')
const buttons = document.getElementsByClassName('sidebar-button') // инициализация

function enable(widget, list) {
  for (var i = 0; i < buttons.length; i++) {
    var el = list[i]
    if ((el == widget) && ((el.className.includes("board") || el.className.includes("settings")))) { // если это элемент, который нужно показать, и это - доска или настройки
      el.style.display = "flex" // показать
    } else if (el == widget) { // иначе если это элемент, который нужно показать
      el.style.display = "block" // показать
    } else { // иначе
      el.style.display = "none" // скрыть
    }
  }
}

function bindFunc(n, widgetList){
  enable(widgets[n], widgetList) // переключить видимость элемента
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', bindFunc.bind(null, i, widgets)) // задать кнопкам функцию
}

// обработка выбора проекта
function changeOrder(n){
  var db = JSON.parse(window.localStorage.getItem('db'))// взять базу данных
  var temp = db[n]
  db.splice(n, 1);
  db.splice(0, 0, temp)// вставить проект в начало
  window.localStorage.setItem('db', JSON.stringify(db))// занести данные обратно в базу
}

var select = document.getElementById('project-select') // выбрать кнопку подтверждения
select.addEventListener('change', function() {// по изменении поля выбора
  if (this.value == 'create'){// если выбрана опция создания
    window.location.replace('../views/create.html')// редирект на страницу создания
  } else {// иначе
    changeOrder(this.value)// переставить проект в базе данных
    document.location.reload() // перезагрузить страницу
  }
});// установка события на изменение