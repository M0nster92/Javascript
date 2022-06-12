function add(a) {
  return function (b) {
    return a + b;
  };
}

const sum = (a) => (b) => a + b;

console.log(sum(1)(5));
