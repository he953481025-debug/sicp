// SICP JS 1.2.1
// recurion
function factorial_1(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

// iteration
function factorial(n) {
  return fact_iter(1, 1, n);
}

factorial(5);

function fact_iter(product, counter, max_count) {
  return counter > max_count
    ? product
    : fact_iter(product * counter, counter + 1, max_count);
}

console.log(factorial(6));
console.log(factorial_1(6));
