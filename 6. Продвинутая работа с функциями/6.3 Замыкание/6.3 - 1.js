function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // ?
alert( counter2() ); //

//ОТВЕТ: Так как первый второй счетчик - то разные обращения к функции. то у них будет разное лексическое окружение.
// Они независимы и counter2 покажет 0, а затем 1.