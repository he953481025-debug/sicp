// exercise 1.11
function rules(n) {
  if (n < 3) {
    return n;
  }
  return rules(n - 1) + 2 * rules(n - 2) + 3 * rules(n - 3);
}

function rules_iter(n) {
  if (n < 3) {
    return n;
  }
  return rules_iteration(0, 1, 2, n - 2);
  function rules_iteration(a, b, c, counter) {
    return counter == 0
      ? c
      : rules_iteration(b, c, c + 2 * b + 3 * a, counter - 1);
  }
}
console.log(rules(10));

console.log(rules_iter(10));
