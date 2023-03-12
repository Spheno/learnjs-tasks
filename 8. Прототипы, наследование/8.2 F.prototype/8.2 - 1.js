// В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

// Сначала у нас есть такой код:

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

alert( rabbit.eats ); // true


// Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

//1

Rabbit.prototype = {};

alert( rabbit.eats ); // ?

//ОТВЕТ: true - потому что уже созданный rabbit никак от наших действий не пострадал

//2
// …А если код такой (заменили одну строчку)?

Rabbit.prototype.eats = false;

alert( rabbit.eats ); // ?

//ОТВЕТ: false. Объект изменен и все ссылающиеся на него объекты транслируют эти изменения.


//3
//Или такой (заменили одну строчку)?

delete rabbit.eats;

alert( rabbit.eats ); // ?

//ОТВЕТ: true - потому что свойство eats в прототипе никак от наших действий не изменится.

//4
// Или, наконец, такой:

delete Rabbit.prototype.eats;

alert( rabbit.eats ); // ?

//ОТВЕТ: А вот теперь свойство eats постродало - его больше нет. И  фдуке  выдаст underfined.