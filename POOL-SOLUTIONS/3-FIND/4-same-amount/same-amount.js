function sameAmount(str, reg1, reg2) {
    const r1 = new RegExp(reg1.source, reg1.flags.includes('g') ? reg1.flags : reg1.flags + 'g');
    const r2 = new RegExp(reg2.source, reg2.flags.includes('g') ? reg2.flags : reg2.flags + 'g');

    const count1 = (str.match(r1) || []).length;
    const count2 = (str.match(r2) || []).length;

    return count1 === count2;
}

// console.log(sameAmount("aaabbb", /a/g, /b/g)); 
// // true → 3 a's and 3 b's
// console.log(sameAmount("hello123", /[a-z]/g, /\d/g)); 
// // false → letters ≠ digits
// console.log(sameAmount("test", /x/g, /y/g)); 
// // true → both match 0 times