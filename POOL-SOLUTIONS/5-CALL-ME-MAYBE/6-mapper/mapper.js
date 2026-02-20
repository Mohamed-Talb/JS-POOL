function map(Arr, func) 
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        return NaN;
    let newArr = [];
    for (let i = 0; i < Arr.length; i++) 
    {
        if (!(i in Arr)) continue;
            newArr.push(func(Arr[i], i, Arr));
    }
    return newArr;
}


function myFlat(Arr, Depth = 1)
{
    const arrLen = Arr.length;
    let Flattened = []
    for (let i = 0; i < arrLen; i++)
    {
        if (!(i in Arr)) continue;
        if (Array.isArray(Arr[i]) && Depth > 0)
            Flattened.push(...myFlat(Arr[i], Depth-1))
        else 
            Flattened.push(Arr[i]);
    }
    return Flattened;
}

function flatMap(Arr, func)
{
    return myFlat(map(Arr, func));
}


