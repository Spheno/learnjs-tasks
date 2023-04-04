//Ошибка в setTimeout
//Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

//ОТВЕТ: Нет, catch не выполнентся. потому что ошибка произойдет в setTimeout
//а к этому моменту catch уже будет пройден.