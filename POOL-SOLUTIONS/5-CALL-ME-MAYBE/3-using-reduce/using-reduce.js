function adder(Arr, initAcc = 0)
{   
    const sumV = Arr.reduce((accumulator, currentValue) => accumulator + currentValue, initAcc)
    return sumV;
}

function sumOrMul(Arr, initV = 0)
{
    const reducer = (accumulator, currentValue) =>
    {
        if (currentValue % 2 == 0)
            accumulator *= currentValue;
        else
            accumulator += currentValue;
        return accumulator;
    } 
    const retV = Arr.reduce(reducer, initV)
    return retV;
}

function funcExec(Arr, initAcc = 0)
{
    const reducer = (accumulator, apply) => apply(accumulator)
    const retV = Arr.reduce(reducer, initAcc);
    return retV;
}