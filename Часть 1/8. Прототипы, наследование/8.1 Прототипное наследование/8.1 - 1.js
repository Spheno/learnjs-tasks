let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); //true из rabbit

delete rabbit.jumps; // jumps удалилось в rabbit

alert( rabbit.jumps ); // null из animal

delete animal.jumps; // jumps удалилось в animal

alert( rabbit.jumps ); // underfined потому что нигде не осталось jumps