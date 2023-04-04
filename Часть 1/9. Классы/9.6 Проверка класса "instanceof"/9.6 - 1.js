function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

//ОТВЕТ: A.prototype и B.prototype ссылаются на один и тотже объект. И при создании а он будет содерать в себе прототипы и A.prototype и B.prototype. Потому и true.