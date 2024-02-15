// перетаскивание элементов
function resetIndex(m){// сброс идексов у элементов доски
  for (let i = 0; i < m.childElementCount; i++){// пройтись по элементам
    m.children[i].dataset.value = i // сбросить их индекс
  }
}

function resetDb(target){// обновление базы данных
  let db = JSON.parse(window.localStorage.getItem('db'))// взять информацию из базы даннны
  db[0]['tasks'][target.id] = []// сброс
  for (let i = 0; i < target.childElementCount; i++){// пройтись по элементам доски
    db[0]['tasks'][target.id].push(target.children[i].textContent)// занести их текст в базу
  }
  return JSON.stringify(db) // возврат измененной базы
}

dragula([document.getElementById('toDo'), document.getElementById('inProgress'), document.getElementById('done')], {// добавление drag-n-drop технологии
  removeOnSpill: true// удалять при смахивании
}).on('remove', function (el, cont, src) {// если объект был удален
    let db = JSON.parse(window.localStorage.getItem('db'))// взять базу данных
    db[0]['tasks'][src.id].splice(el.dataset.value, 1)// удалить из нее элемент
    resetIndex(src)// сдвинуть нумерацию элементов
    window.localStorage.setItem('db', JSON.stringify(db))// вернуть в базу
}).on('drop', function(el, target, source, sibling) {// если объект был перенесен
    if (target == source){// если в пределах одного столбца 
      resetIndex(target) // сбросить индексы
    } else {// иначе
      resetIndex(target)
      resetIndex(source)// бсросить индексы
      window.localStorage.setItem('db', resetDb(source))// вернуть в базу данные
    }
    window.localStorage.setItem('db', resetDb(target))// вернуть в базу
})
// создание нового задания
function addTask(text){
  let db = JSON.parse(window.localStorage.getItem('db'))// получение данных из базы данных
  db[document.getElementById('project-select').value]['tasks']['toDo'].push(text)// добавление нового элемента
  window.localStorage.setItem('db', JSON.stringify(db))// сохранение в базу
}

var toDoColumn = document.getElementById('toDo')
var textField = document.getElementById('board-new-task-text')// получение нужных ссылок
document.getElementById('main-board-submit-new').addEventListener('click', () => {// по нажатии на кнопку
  if (textField.value != '') {// если имя не пустое
    var newTask = document.createElement('li')
    newTask.className = 'task'
    newTask.textContent = textField.value
    newTask.dataset.value = toDoColumn.childElementCount// создать нужный элемент с параметрами
    toDoColumn.appendChild(newTask)// добавить его
    addTask(textField.value)// внесение данных в базу
    textField.value = ''// удалить данные из поля ввода
  }
})