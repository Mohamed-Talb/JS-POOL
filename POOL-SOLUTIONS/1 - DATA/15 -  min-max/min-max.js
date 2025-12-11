const max = (a,b) => (a > b || Object.is(a, 0) && Object.is(b, -0) ? a:b);
const min = (a,b) => (a > b || Object.is(a, 0) && Object.is(b, -0) ? b:a);


console.log(max(5, 10));    // Expected: 10
console.log(max(-5, -10));  // Expected: -5
console.log(max(5, -10));   // Expected: 5
console.log(max(7, 7));     // Expected: 7
console.log(max(3.5, 2.1)); // Expected: 3.5


console.log(min(5, 10));    // Expected: 5
console.log(min(-5, -10));  // Expected: -10
console.log(min(5, -10));   // Expected: -10
console.log(min(7, 7));     // Expected: 7
console.log(min(3.5, 2.1)); // Expected: 2.1

console.log(max(0, -0)); // Expected: 0
console.log(min(0, -0)); // Expected: -0