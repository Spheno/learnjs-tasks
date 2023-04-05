//Можно ли "перевыполнить" промис?
//Что выведет код ниже?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

//ОТВЕТ: "Перевыполнить" промис нельзя. Если он уже был выполнен или отклонен, то дополнительтные resolve и reject будут проигнорированны.
//Код выведет 1