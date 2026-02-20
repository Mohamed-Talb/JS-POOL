
function fold(Arr, func, Accumulator)
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        throw new Error("Invalid reduce Arguments");
    for (const item of Arr)
        Accumulator = func(Accumulator, item);
    return Accumulator;
}

function foldRight(Arr, func, Accumulator)
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        throw new Error("Invalid reduce Arguments");
    for (let i = Arr.length-1; i >= 0; i--)
        Accumulator = func(Accumulator, Arr[i]);
    return Accumulator;
}

function reduce(arr, func) 
{
    if (!Array.isArray(arr) || typeof func !== "function")
        throw new Error("Invalid reduce Arguments");
    if (arr.length < 1)
        throw new Error("Reduce of empty array");
    let accumulator = arr[0];
    for (let i = 1; i < arr.length; i++)
    {
        accumulator = func(accumulator, arr[i], i, arr);
    }

  return accumulator;
}



function reduceRight(Arr, func)
{
    if (!Array.isArray(Arr) || typeof func !== "function" || Arr.length < 1)
        throw new Error("Invalid reduce Arguments");
    let acc = Arr[Arr.length - 1];
    for (let i = Arr.length - 2; i >= 0; i--)
        acc = func(acc, Arr[i]);
    return acc;
}

