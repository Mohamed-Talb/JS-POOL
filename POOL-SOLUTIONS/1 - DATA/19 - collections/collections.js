function arrToSet(Arg)
{
    const mySet = Set(Arg);
    return mySet; 
}
function arrToStr(Arg)
{
    // const mystr = Arg.join("");
    return Arg.toString();
}
function setToArr(Arg)
{
    // return ([...mySet]);
    return (Array.from(Arg));
} 
function setToStr(Arg)
{
    return (arrToStr(setToArr(Arg)));
} 
function strToArr(Arg)
{
    return (Array.from(Arg));
    // return (Arg.split(""))
}
function strToSet(Arg)
{
    
} 
function mapToObj(Arg)
{

} 
function objToArr(Arg)
{

}
function objToMap(Arg)
{

} 
function arrToObj(Arg)
{

}
function strToObj(Arg)
{

}