// задать минимальную дату в форму - завтрашний день
var tomorrow = new Date()
var d = tomorrow.getDate() + 1
var m = tomorrow.getMonth() + 1
var y = tomorrow.getFullYear() // взять части даты

if (d < 10) { // если день занимает 1 разряд
  d = '0' + d // добавить ноль в начале
}
if (m < 10) { // если месяц занимает 1 разряд
  m = '0' + m // добавить ноль в начале
}

tomorrow = y + '-' + m + '-' + d // создать шаблон завтрашней даты
document.getElementById('project-date-picker').min = tomorrow // задать минимальную дату

// проверка ответа
function validate(){
  let pname = document.getElementById('project-name-inp')
  let date = document.getElementById('project-date-picker')
  if ((pname.value !== '') && (date.value !== '') && (Date.parse(date.value) >= Date.parse(date.min))) {// если данные валидны
    return true // вернуть истину
  } else {
    pname.value !== '' ? pname.style.borderColor = '' : pname.style.borderColor = 'red' // подсветить красным окно названия в случае неправильных данных
    if ((date.value !== '') && (Date.parse(date.value) >= Date.parse(date.min))) { // если дата введена правильно
      date.style.borderColor = '' // ничего не подсвечивать
    } else { // инчае
      date.style.borderColor = 'red' // подсветить красным
    }
    return false// вернуть ложь
  }
}