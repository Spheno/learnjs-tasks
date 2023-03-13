// В чём отличие между getComputedStyle(elem).width и elem.clientWidth?

// Укажите хотя бы 3 отличия, лучше – больше.

// elem.clientWidth учитывает паддинги, а getComputedStyle(elem).width может не учитывать.
// elem.clientWidth - число, etComputedStyle(elem).width - строка;
// getComputedStyle(elem).width может вернуть значение "auto"