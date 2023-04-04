//Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?

//ОТВЕТ: Никакой разницы между явным и неявням наследованием не будет.

class Rabbit extends Object {
  constructor(name) {
  super(); // ошибка опять была в потерянном super
  this.name = name;
  }
  }
  
  let rabbit = new Rabbit("Кроль");
  
  alert( rabbit.hasOwnProperty('name') ); // true