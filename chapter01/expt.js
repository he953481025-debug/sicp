// exercise 1.16
// 求幂
// 一个基数b和一个指数n
//01解法：递归法
function expt(b, n) {
    if (n == 0) {
        return 1;
    }
    return b * expt(b, n - 1);
}
// 02解法：迭代法
function expt_02(b, n) {
    return expt_iter(b, n, 1);
    function expt_iter(b, counter, product) {
        if (counter == 0) {
            return product;
        }
        return expt_iter(b, counter - 1, product * b);
    }
}
// 03解法 递归反复求平方，当n % 2 == 0时，只需要求 b的n/2的指数即可，然后再求平方。当n %2 == 1时，求b*(b^(n-1))
function fast_expt(b, n) {
    if (n == 0) {
        return 1;
    }
    return is_even(n) ? square(fast_expt(b, n / 2)) : b * fast_expt(b, n - 1);
}

function fast_expt04(b, n) {
    return fast_expt_iter(b,  n, 1);
    function fast_expt_iter(b, n, a) {
        if(n == 0) {
            return a;
        }
        console.log("b=>", b, "n=>", n, "a=>", a)
        return fast_expt_iter(square(b), is_even(n) ? n/2 : (n - 1) / 2, is_even(n) ? a : b * a)
    }
}
function square(x) {
    return x * x;
}
function is_even(x) {
    return x % 2 == 0;
}
console.log(expt(2, 12))
console.log(expt_02(2, 12))
console.log(fast_expt(2, 12))
console.log(fast_expt04(2, 12))