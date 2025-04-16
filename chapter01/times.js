// exercise 1.17
function times(a, b) {
    if (b == 0){
        return 0;
    }
    return a + times(a, b - 1);
}

function fast_times(a, b) {
    if(b == 0) {
        return 0;
    }
    return is_even(b) ? fast_times(double(a), halve(b)) : a + fast_times(double(a), halve(b-1))
}

function fast_times01(a, b) {
    return fast_times_iter(a, b, 0);
    function fast_times_iter(a, b, product) {
        if(b == 0) {
            return product;
        }
        return fast_times_iter(double(a), is_even(b)? halve(b) : halve(b-1), is_even(b) ? product : a + product)
    }

}

function is_even(x) {
    return x % 2 == 0;
}

function double(x) {
    return x + x;
}
function halve(x) {
    return x / 2;
}

console.log(times(3, 6))
console.log(fast_times(3, 6))
console.log(fast_times01(3, 6))