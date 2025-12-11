const isPositive = (number) => (number >= 0 ? true:false);

const abs = (number) => 
{
    if (Object.is(number, -0)) 
        return 0;
    return isPositive(number) ? number : -number;
};


console.log(isPositive(5));      // true
console.log(isPositive(0));      // true
console.log(isPositive(-3));     // false

console.log(abs(10));            // 10
console.log(abs(-10));           // 10
console.log(abs(0));             // 0
console.log(abs(-0));            // 0
console.log(abs(-3.5));          // 3.5
console.log(abs(NaN));           // NaN