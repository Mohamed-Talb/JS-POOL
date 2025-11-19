function isPositive(number)
{
    // if (number < 0)
    //     return false;
    // else
    //     return true;
    return number < 0 ? false : true;
}
const abs = (number) => (number < 0 ? number * -1 : number);

console.log(isPositive(10));
console.log(isPositive(-10));
console.log(isPositive(Number.MAX_SAFE_INTEGER));
console.log(isPositive(Number.MIN_SAFE_INTEGER));
console.log("abs part :---------------------")
console.log(abs(10));
console.log(abs(-10));
console.log(abs(Number.MAX_SAFE_INTEGER));
console.log(abs(Number.MIN_SAFE_INTEGER));