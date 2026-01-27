function letterSpaceNumber(string)
{
    const reg = /[a-zA-Z] [0-9](?![a-zA-Z0-9])/g
    return string.match(reg) || [];

}

// console.log(letterSpaceNumber('I like 7up.'))

// // Basic matches
// console.log(letterSpaceNumber("A 1"));// ["A 1"]
// console.log(letterSpaceNumber("I like E 2 and F 3."));// ["E 2", "F 3"]
// console.log(letterSpaceNumber("x 9 y 8"));// ["x 9", "y 8"]

// // Should NOT match (number has more than one digit)
// console.log(letterSpaceNumber("A 10"));// []
// console.log(letterSpaceNumber("B 12 C 3"));// ["C 3"]

// // Should NOT match (digit followed by a letter)
// console.log(letterSpaceNumber("A 1a"));// []
// console.log(letterSpaceNumber("B 2Z"));// []
// console.log(letterSpaceNumber("C 3_ D 4x"));// ["C 3"]   // underscore is not a letter, so C 3 matches; D 4x fails

// // Mixed text
// console.log(letterSpaceNumber("Hello A 1, then B 2! and C 3d, plus D 4."));// ["A 1", "B 2", "D 4"]

// // At boundaries
// console.log(letterSpaceNumber("Start: Z 7"));// ["Z 7"]
// console.log(letterSpaceNumber("Z 7End"));// []  // 7 is followed by letter 'E'

// // No matches
// console.log(letterSpaceNumber("No patterns here."));// []
// console.log(letterSpaceNumber(""));// []
