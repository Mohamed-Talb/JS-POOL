function flow(funcsArr)
{
    return function(...args) 
    {
        let acc = funcsArr[0](...args);
        for (let i = 1; i < funcsArr.length; i++) 
        {
            acc = funcsArr[i](acc);
        }
        return acc;
    }
}