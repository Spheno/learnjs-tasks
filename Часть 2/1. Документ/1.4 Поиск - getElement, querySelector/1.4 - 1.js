// Таблицу с id="age-table".

let table = document.querySelector('#age-table')
console.log(table)


// Все элементы label внутри этой таблицы (их три)

let labelList = table.querySelectorAll('label')
console.log(labelList)


// Первый td в этой таблице (со словом «Age»).

let firstTd = table.querySelector('td')
console.log(firstTd)

// Форму form с именем name="search".

let form = document.getElementsByName('search')[0]
console.log(form)

// Первый input в этой форме.

let firstInput = form.querySelector('input')
console.log(firstInput)


// Последний input в этой форме.

let inputList = form.querySelectorAll('input')
let lastInput = inputList[inputList.length - 1]
console.log(lastInput)
