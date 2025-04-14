function fib_recursion(n) {
  return n === 0
    ? 0
    : n === 1
    ? 1
    : fib_recursion(n - 1) + fib_recursion(n - 2);
}

function fib_iter(n) {
  return fib_iteration(0, 1, n);
  function fib_iteration(a, b, counter) {
    return counter === 0 ? a : fib_iteration(b, a + b, counter - 1);
  }
}

console.log(fib_recursion(6));
console.log(fib_iter(7));
