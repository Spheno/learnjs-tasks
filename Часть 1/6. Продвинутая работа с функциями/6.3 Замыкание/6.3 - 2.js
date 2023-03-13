function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

alert(counter.up()); // ?
alert(counter.up()); // ?
alert(counter.down()); // ?

//ОТВЕТ: Будет прекрасно работать. Покажет 1, затем 2 и потом 1.
// методы up и down имеют одно лексическое окружение и будет работать с общим значением count.