let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

//Ответ: потому что для работы необходимо было применить метод Array.from и превратить map.keys() в массив.

let keys = Array.from(map.keys());