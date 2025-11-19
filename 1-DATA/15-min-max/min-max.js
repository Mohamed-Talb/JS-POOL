const max = (a, b) => (a < b ? b : a);
const min = (a, b) => (a < b ? a : b);

console.log(max(5, 0));
console.log(max(-5, 0));

console.log(min(1, -10));
console.log(min(-5, -2));