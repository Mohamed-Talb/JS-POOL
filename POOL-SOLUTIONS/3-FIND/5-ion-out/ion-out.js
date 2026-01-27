function ionOut(str)
{
    const regex = /\b(\w*t)(ion)\w*\b/g;
    const matchAll = [...str.matchAll(regex)];
    return [...matchAll.map((Arg)=> Arg[1])];
}

// // Basic
// console.log(ionOut("attention, direction"));// ["attent", "direct"]
// console.log(ionOut("The action is not a traction."));// ["act", "tract"]
// console.log(ionOut("fiction and motion are different"));// ["fict", "mot"]

// // Multiple matches in a sentence
// console.log(ionOut("The population and the celebration are huge."));// ["populat", "celebrat"]
// console.log(ionOut("caution! detention, extinction, and adoption."));// ["caut", "detent", "extinct", "adopt"]

// // Make sure it requires 'tion' (t + ion)
// console.log(ionOut("ionization is a word"));// [] (no 'tion')
// console.log(ionOut("fusion, vision, region"));// [] (no 'tion')

// // Punctuation / boundaries
// console.log(ionOut("attention!"));// ["attent"]
// console.log(ionOut("detention? extinction."));// ["detent", "extinct"]

// // No matches
// console.log(ionOut("hello world"));// []
// console.log(ionOut(""));// []
