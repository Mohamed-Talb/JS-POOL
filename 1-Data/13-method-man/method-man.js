function words(string)
{
    if (typeof(string) !== 'string' || string.length === 0) 
        return '';
    // const trimming = string.trim();
    const spliting = string.split();
    return spliting;
}

function sentence(arrayOfStrings)
{
    return arrayOfStrings.join(" ");
}

function yell(string)
{
    if (typeof(string) !== 'string' || string.length === 0) 
        return '';
    return string.toLowerCase();
}

function whisper(string)
{
    if (typeof(string) !== 'string' || string.length === 0) 
        return '';
    return "*" + yell(string) + "*";
}

function capitalize(string)
{
    if (typeof(string) !== 'string' || string.length === 0) 
        return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(words("apple banana orange"));
console.log(sentence(["apple", "banana", "orange"]));
console.log(yell("Hi my NamE is MOHAMED"));
console.log(whisper("Apple Banana Orange"));
console.log(capitalize("Hi my name is mohamed"));