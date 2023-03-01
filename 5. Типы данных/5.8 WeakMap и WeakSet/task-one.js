// Есть массив сообщений:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
// У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.

// Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.

// P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.

// P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям.


//ОТВЕТ: Для всех этих целей можно использовать WeakSet.
//1. Это прекрасное хранилище для данных типа да/нет, то есть идеально подходит для хранинеия информации о том прочитано сообщение или нет.
//2. При удалении из массива messages вся информация о сообшении удалится и из WeakSet.
//3. Сам объект сообщений при внесении  информации о прочитанно сообщение или нет не затронет массив messages.