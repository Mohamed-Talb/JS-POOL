const vowels = /[aeiouAEIOU]/;
function vowelDots(str)
{
    let fIndex = str.search(vowels);
    let newstr = "";
    while ((fIndex = str.search(vowels)) != -1)
    {
        newstr += str.slice(0, fIndex+1) + ".";
        str = str.slice(fIndex+1);
    }
    newstr += str;
    return newstr;
}

// // Basic
// console.log(vowelDots("hello"));// "he.llo."
// console.log(vowelDots("world"));// "wo.rld"
// console.log(vowelDots("javascript"));// "ja.va.scri.pt"

// // Uppercase vowels
// console.log(vowelDots("HELLO"));// "HE.LLO."
// console.log(vowelDots("AeIoU"));// "A.e.I.o.U."

// // Mixed
// console.log(vowelDots("Mohamed Talb"));// "Mo.ha.me.d Ta.lb"
// console.log(vowelDots("ChatGPT is cool"));// "Cha.tGPT i.s co.o.l"

// // No vowels
// console.log(vowelDots("rhythm"));// "rhythm"

// // Empty string
// console.log(vowelDots(""));// ""
