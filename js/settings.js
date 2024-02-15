// изменение данных проекта
var pname = document.getElementById('project-name-inp')
var date = document.getElementById('project-date-picker')
var pdesc = document.getElementById('project-desc-text')
var db = JSON.parse(window.localStorage.getItem('db'))// получение нудных ссылок и баз данных

pname.value = db[0]['info']['name']
date.value = db[0]['info']['deadline']
pdesc.value = db[0]['info']['desc']// присваивание полям текущие данным

function modifyProject(){// изменение данных проекта
  let pname = document.getElementById('project-name-inp')
  let date = document.getElementById('project-date-picker')// получение ссылок
  if (validate()) {// если данные валидны
    db[0]['info']['name'] = pname.value
    db[0]['info']['deadline'] = date.value
    db[0]['info']['desc'] = pdesc.value// задать новые данные
    window.localStorage.setItem('db', JSON.stringify(db))// внести данные
    window.location.replace('../views/main.html')// переадресовать на страницу
  }
}

var submit = document.getElementById('create-submit-btn') // выбрать кнопку подтверждения
submit.addEventListener('click', modifyProject) // изменение проекта по нажатии