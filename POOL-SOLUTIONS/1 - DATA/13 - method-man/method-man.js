const words = (string) => [string.split(' ')];
const sentence = (strings) => [strings.join(' ')];
const yell = (string) => (string.toUpperCase());
const whisper = (string) => ('*' + string.toLowerCase() + '*');
function capitalize (string)
{
    const newstr = string[0].toUpperCase() + string.slice(1).toLowerCase();
    return newstr;
}


// words()
console.log("TEST words():");
console.log(words("hello world"));  
// EXPECT: [ ["hello", "world"] ]

console.log(words("i love coding"));  
// EXPECT: [ ["i", "love", "coding"] ]


// sentence()
console.log("\nTEST sentence():");
console.log(sentence(["hello", "world"]));
// EXPECT: [ "hello world" ]

console.log(sentence(["i", "love", "js"]));
// EXPECT: [ "i love js" ]


// yell()
console.log("\nTEST yell():");
console.log(yell("hello"));   
// EXPECT: "HELLO"

console.log(yell("test test"));
// EXPECT: "TEST TEST"


// whisper()
console.log("\nTEST whisper():");
console.log(whisper("HELLO"));
// EXPECT: "*hello*"

console.log(whisper("JavaScript"));
// EXPECT: "*javascript*"


// capitalize()
console.log("\nTEST capitalize():");
console.log(capitalize("hello"));  
// EXPECT: "Hello"

console.log(capitalize("hELLO"));  
// EXPECT: "Hello"

console.log(capitalize("javaSCRIPT"));  
// EXPECT: "Javascript"
