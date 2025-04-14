function cube(x) {
    if (x == 0) {
        return 0;
    } 
    return cube_iter(x/2, x)
}

function cube_iter(guess, x) {
    return is_good_enough(guess, x) ? guess : cube_iter(improve(guess, x), x);
    // return condition(is_good_enough(guess, x), guess, sqrt_iter(improve(guess, x), x));
}

function is_good_enough(guess, x) {
    return abs(guess * guess * guess - x)  < 1e-15;
}

function improve(guess, x) {
    return (2 * guess + x / (guess * guess)) / 3
}

function abs(x) {
    return x < 0 ? -x : x;
}


console.log(cube(9));