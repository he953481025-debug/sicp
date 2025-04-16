// recursion
function make_change_count(amount) {
    return cc(amount, 5)
}
function cc(amount, kind_of_coins) {
   return  amount == 0 ? 1 : amount < 0 || kind_of_coins == 0 ? 0 : cc(amount, kind_of_coins - 1) + cc(amount - first_denomination(kind_of_coins), kind_of_coins)
}
function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ? 1
    : kinds_of_coins === 2 ? 5
    : kinds_of_coins === 3 ? 10
    : kinds_of_coins === 4 ? 25
    : kinds_of_coins === 5 ? 50
    : 0;   
}
console.log(make_change_count(200));

// iteration
function make_change_count_iter(amount) {
    return cc_iter(amount, 0, 5);
}
function cc_iter(amount, current_amount, kind_of_coins) {
   return  amount == current_amount ? 1 : amount < current_amount || kind_of_coins == 0 ? 0 : cc_iter(amount, current_amount, kind_of_coins - 1) + cc_iter(amount, current_amount + first_denomination(kind_of_coins), kind_of_coins)
}
console.log(make_change_count_iter(200));