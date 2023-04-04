class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    super(name); //ОТВЕТ: ошибка в отсутвиии super в дочернем классе. Теперь все работает.
    //this.name = name; а вот так не работало.
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("Белый кролик");
alert(rabbit.name);