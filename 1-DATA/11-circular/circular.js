// const circular = {
//     circular : circular,
// } // we cannnot declare it like that because the obj doesnt defiened yet

const circular = {}
circular.circular = circular;
console.log(circular);
console.log(circular.circular);