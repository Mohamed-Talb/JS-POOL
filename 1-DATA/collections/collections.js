function arrToSet(arr)
{
    const array = new Set(arr);
    return (array);
}

function arrToStr(arr)
{
    return (arr.toString())
}

function setToArr(set)
{
    return [...set];
}

// function setToStr(set) 
// {
//     const string = str(set);
//     return string;
// } 

function strToArr(str) 
{
    // return str.split("");
    // return [...str];
    return Array.from(str);
}

function strToSet(str)
{
    return
}

function mapToObj()
{

}
function objToArr()
{

}
function objToMap()
{

}
function arrToObj()
{

}
function strToObj()
{

}

function superTypeOf(variable)
{
    if (variable instanceof Set)
        return "Set";
    else if (variable instanceof Map)
        return "Map";
    else if (variable instanceof Array)
        return "Array";
    else if (variable instanceof Object && variable === null)
        return "null";
    else
        return typeof(variable);
}

const str = 'hello'
const arr = [1, 2, 1, 3]
const obj = { x: 45, y: 75, radius: 24 }
const set = new Set()
const map = new Map()
set.add(1)
set.add(2)
set.add(1)
set.add(3)
map.set('a', 1)
map.set('b', 2)
map.set(3, 'c')
map.set(4, 'd')

console.log(arrToSet(arr)) // -> Set { 1, 2, 3 }
console.log(arrToStr(arr)) // -> String '1213'
console.log(setToArr(set)) // -> [1, 2, 3]
// console.log(setToStr(set)) // -> '123'
console.log(strToArr(str)) // -> ['h', 'e', 'l', 'l', 'o']
console.log(strToSet(str)) // -> Set { 'h', 'e', 'l', 'o' }
mapToObj(map) // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
objToArr(obj) // -> [45, 75, 24]
objToMap(obj) // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
arrToObj(arr) // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
strToObj(str) // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }

// superTypeOf(map) //         -> 'Map'
// superTypeOf(set) //         -> 'Set'
// superTypeOf(obj) //         -> 'Object'
// superTypeOf(str) //         -> 'String'
// superTypeOf(666) //         -> 'Number'
// superTypeOf(NaN) //         -> 'Number'
// superTypeOf(arr) //         -> 'Array'
// superTypeOf(null) //        -> 'null'
// superTypeOf(undefined) //   -> 'undefined'
// superTypeOf(superTypeOf) // -> 'Function'