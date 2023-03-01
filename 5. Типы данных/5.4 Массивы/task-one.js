let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?

//ОТВЕТ: fruits.length = 4; shoppingCart и fruits равны - это ссылки на один и того же массив
//и изменения в одном приводят к изменениям в другом. 