function every(Arr, func)
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        throw new Error("Invalid reduce Arguments");
    const arrLen = Arr.length;
    let every = true;
    for (let i = 0; i < arrLen; i++)
        every = every && func(Arr[i], i, Arr);
    return every;
}

function some(Arr, func)
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        throw new Error("Invalid reduce Arguments");
    const arrLen = Arr.length;
    let some = false;
    for (let i = 0; i < arrLen; i++)
        some = some || func(Arr[i], i, Arr);
    return some;
}

function none(Arr, func)
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        throw new Error("Invalid reduce Arguments");
    const arrLen = Arr.length;
    let none = true;
    for (let i = 0; i < arrLen; i++)
    {
        if (func(Arr[i], i, Arr))
            return false
    }
    return none;
}
