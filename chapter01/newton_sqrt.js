function sqrt(x) {
    if (x == 0) {
        return 0;
    } 
    return sqrt_iter(x/2, x)
}

function sqrt_iter(guess, x) {
    return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
    // return condition(is_good_enough(guess, x), guess, sqrt_iter(improve(guess, x), x));
}

function is_good_enough(guess, x) {
    return abs(guess * guess - x)  < 1e-10;
}

function improve(guess, x) {
    return average(guess, x / guess)
}

function average(x, y) {
    return (x + y) / 2
}

function condition(predicate, thenClause, elseClause) {
    return predicate ? thenClause : elseClause
}
function abs(x) {
    return x < 0 ? -x : x;
}


console.log(sqrt(1000))