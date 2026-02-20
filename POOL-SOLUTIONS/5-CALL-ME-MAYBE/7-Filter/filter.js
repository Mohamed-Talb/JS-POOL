function filter(Arr, func) 
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        return undefined;
    let newArr = [];
    for (let i = 0; i < Arr.length; i++) 
    {
        if (func(Arr[i], i, Arr))
            newArr.push(Arr[i]);
    }
    return newArr;
}

function reject(Arr, func) 
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        return undefined;
    let newArr = [];
    for (let i = 0; i < Arr.length; i++) 
    {
        if (!func(Arr[i], i, Arr))
            newArr.push(Arr[i]);
    }
    return newArr;
}

function partition(Arr, func)
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        return undefined;
    return [filter(Arr, func), reject(Arr, func)]
}

