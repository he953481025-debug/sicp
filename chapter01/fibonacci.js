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
// 利用快速幂求解斐波那契数列
function fast_fib(n) {
    // a = 
  return fast_fib_iter(1, 0, 0, 1, n);
  function fast_fib_iter(a, b, p, q, n) {
    if (n == 0) {
      return b;
    }
    return is_even(n)
      ? fast_fib_iter(a, b, square(p) + square(q), square(q) + 2 * p * q, n / 2)
      : fast_fib_iter(b * q + a * q + a * p, b * p + a * q, p, q, n - 1);
  }
  function is_even(x) {
    return x % 2 == 0;
  }
  function square(x) {
    return x * x;
  }
}

console.log(fib_recursion(6));
console.log(fib_iter(7));
console.log(fast_fib(6));
