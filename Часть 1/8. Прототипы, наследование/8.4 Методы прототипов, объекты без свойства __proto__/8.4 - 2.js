function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

//Все эти вызовы делают одно и тоже или нет?

rabbit.sayHi(); // Rabbit, так как this = rabbit
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();

//Остальные 3 underfined, т.к. this = Rabbit.prototype