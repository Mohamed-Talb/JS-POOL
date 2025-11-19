function multiply(a, b)
{
    if (typeof a !== "number" || typeof b !== "number")
    {
        console.error("invalid argument: excepted (number, numbe)");
        return;
    }
    let i = 0;
    let res = 0;
    let negative = false;
    if (b < 0) {b = -b; negative = true;}
    while (i < b)
    {
        res += a;
        i++;
    }
    if (negative)
        return -res;
    return res;
}

function divide(a, b)
{
    let res = 0;
    let negative = false;
    if (a == 0) return 0;
    if (b == 0) return Infinity;
    if (a < 0) {a = -a; negative = !negative}
    else if (b < 0) { b = -b; negative = !negative};
    while (a >= b)
    {
        a -= b;
        res++;
    }
    if (negative)
        return -res;
    return res;
}

function modulo(a, b)
{
    let res = 0;
    let negative = false;
    if (a == 0 && b == 0) return NaN;
    if (a  == 0) return 0;
    if (b == 0) return NaN;
    if (a < 0) { a = -a; negative = true;}
    if (b < 0) {b = -b;}
    while (a >= b)
    {
        a -= b;
        res++;
    }
    if (negative)
        return -a;
    return a;
}
console.log(multiply(5, 3));     // 15
console.log(multiply(5, -3));    // -15

console.log(divide(10, 3));      // 3
console.log(divide(-10, 3));     // -3
console.log(divide(10, -3));     // -3

console.log(modulo(10, 3));      // 1
console.log(modulo(-10, 3));     // -1
console.log(modulo(10, -3));     // 1
console.log(modulo(-10, -3));    // -1
