function first(arr)
{
    return arr[0];
}
function last(arr)
{
    return arr[arr.length - 1];
}
function kiss(arr)
{
    return arr[0] + arr[arr.length - 1];
}

const arr = ["mohamed", 13, 37];
const str = ""

console.log(first(arr));
console.log(last(arr));
console.log(kiss(arr));

console.log(first(str));
console.log(last(str));
console.log(kiss(str));