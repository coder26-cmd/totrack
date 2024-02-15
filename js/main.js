// подгрузка данных из хранилища
var db = JSON.parse(window.localStorage.getItem('db'))// загрузить данные
var selector = document.getElementById('project-select')
var createRedirect = document.getElementById('create-redirect')
var doneColumn = document.getElementById('done')
var inProgressColumn = document.getElementById('inProgress')
var greet = document.getElementById('greet')
var phrase = document.getElementById('phrase')
var descText = document.getElementById('prj-description')
var daysLeft = document.getElementById('prj-days')// взять ссылки на нужные элементы

window.document.title = db[0]['info']['name'] // задать имя окна

for (let i = 0; i < db.length; i++) {// пройтись по массиву
  var db = JSON.parse(window.localStorage.getItem('db'))
  let option = document.createElement('option')
  option.value = i // создать новый элемент выбора
  if (i === 0) {// если это первый элемент в списке
    option.selected = true// выбрать его по умолчанию
  }
  option.textContent = db[i]['info']['name']// добавить в выбор проета имя
  createRedirect.before(option)// вставить опцию
}

var db = JSON.parse(window.localStorage.getItem('db'))
for (let i = 0; i < db[0]['tasks']['toDo'].length; i++) {// пройтись по массиву
  let newTask = document.createElement('li')
  newTask.className = 'task'
  newTask.textContent = db[0]['tasks']['toDo'][i]
  newTask.dataset.value = i// создать нужный элемент с нужными аргументами
  toDoColumn.appendChild(newTask)// добавление элемента в доску
}

for (let i = 0; i < db[0]['tasks']['inProgress'].length; i++) {// пройтись по массиву
  let newTask = document.createElement('li')
  newTask.className = 'task'
  newTask.textContent = db[0]['tasks']['inProgress'][i]
  newTask.dataset.value = i// создать нужный элемент с нужными аргументами
  inProgress.appendChild(newTask)// добавление элемента в доску
}

for (let i = 0; i < db[0]['tasks']['done'].length; i++) {// пройтись по массиву
  let newTask = document.createElement('li')
  newTask.className = 'task'
  newTask.textContent = db[0]['tasks']['done'][i]
  newTask.dataset.value = i// создать нужный элемент с нужными аргументами
  doneColumn.appendChild(newTask)// добавление элемента в доску
}

greet.textContent = `Добро пожаловать в проект "${db[0]['info']['name']}"!`// изменение приветственной фразы

var phrases = ['«Секрет успеха — сделать первый шаг»', '«Возможности не приходят сами — вы создаете их»', '«Успех обычно приходит к тем, кто слишком занят, чтобы его просто ждать»'] // задание мотивационных фраз
phrase.textContent = phrases[Math.floor(Math.random()*phrases.length)];// присваивание случайно фразы

descText.textContent = 'Описание: ' + db[0]['info']['desc']// присваивание абзацу описания проекта

daysLeft.textContent = 'До дедлайна: ' + parseInt((Date.parse(db[0]['info']['deadline']) - Date.now()) / 86400000) + ' дней'// присваивание абзацу количество дней