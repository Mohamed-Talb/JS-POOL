// function more(arg)
// {
//     return argument + 1;
// }

// function less(arg)
// {
//     return argument - 1;
// }
// function add(arg1, arg2)
// {
//     return arg1 + arg2;
// }

// function sub(arg1, arg2)
// {
//     return arg2 - arg1;
// }


// (input) => result
const add = (m, n) => m + n;
console.log(add(5, 6));

const add5 = (m) => m + 5
console.log(add5("mohamed"));

const multiply = (x1, x2) => x1 * x2;
console.log(multiply(5, 5));
console.log(multiply(add(2, 3), 6));
console.log(multiply(multiply(5, add5(5)), multiply(2, add5(10))))

const add10 = (n) => add5(add5(n));
console.log(add10(10));
