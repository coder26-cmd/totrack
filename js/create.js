function createNewProject(){
  let pname = document.getElementById('project-name-inp')
  let date = document.getElementById('project-date-picker')// получение нужных ссылок на объекты
  if (validate()) {
    let project = {info: {
                      name: pname.value, 
                      deadline: date.value, 
                      desc: document.getElementById('project-desc-text').value},
                   tasks: {
                      toDo: [],
                      inProgress: [],
                      done: []
   }} // сгенерировать информацию проекта
  if (window.localStorage.length === 0) {// если в хранилище нет ничего
    window.localStorage.setItem('db', '[]')// создать массив
  }
  let query = JSON.parse(window.localStorage.getItem('db'))// взять информацию из баз данных
  query.unshift(project)// добавить в массив информацию
  window.localStorage.setItem('db', JSON.stringify(query))// добавить в базу данные
  window.location.replace('../views/main.html')// переадресовать на страницу
  }
}

var submit = document.getElementById('create-submit-btn') // выбрать кнопку подтверждения
submit.addEventListener('click', createNewProject) // рсоздание нового проета - привязка функции