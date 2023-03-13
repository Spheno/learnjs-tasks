function f() {
  alert(this.name);
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

f();

//Ответ: Всегда будет Вася. Потому что существующий bind нельзя изменить.