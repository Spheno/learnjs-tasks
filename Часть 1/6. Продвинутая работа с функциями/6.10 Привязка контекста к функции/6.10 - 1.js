function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();

//Ответ:  user.g выведет null.