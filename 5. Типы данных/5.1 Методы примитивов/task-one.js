//Взгляните на следующий код:

let str = "Привет";

str.test = 5;

alert(str.test);
//Как вы думаете, это сработает? Что выведется на экран?

//ОТВЕТ: Нет, такое свойство строке добавить нельзя, это не сработает, выведется ошибка.
//Перед нами строка. И даже получив объкт-обертку она не превращается в объект,
//а значит и принимать данные как объект не может.

