function longWords(Arr)
{
    return Arr.every((Arg) => (typeof Arg === "string" && Arg.length >= 5))
}

function oneLongWord(Arr)
{
    return Arr.some((Arg) => (typeof Arg === "string" && Arg.length >= 10))
}

function noLongWords(Arr)
{
    return Arr.every((Arg) => (typeof Arg === "string" && Arg.length < 7))
}