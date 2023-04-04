function pseudoRandom(seed) {
  let previous = seed;
  const factor = 16807;
  const modulus = 2147483647;

  function* generator() {
    while (true) {
      let next = (previous * factor) % modulus;
      previous = next;
      yield next;
    }
  }

  return {
    next: generator(),
  };
}