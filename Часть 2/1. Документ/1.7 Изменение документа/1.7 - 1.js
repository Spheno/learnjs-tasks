// У нас есть пустой DOM-элемент elem и строка text.

// Какие из этих 3-х команд работают одинаково?

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text

//ОТВЕТ: elem.textContent = text и elem.append(document.createTextNode(text)) - вставят нужный текст и даже код превратит в текст, безопасно.
// elem.innerHTML = text - может вставить не только текст. но и код. Небезопасно.