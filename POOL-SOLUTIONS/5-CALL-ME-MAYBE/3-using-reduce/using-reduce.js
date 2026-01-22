function adder(Arr)
{
    const sumV = Arr.reduce((accumulator, currentValue) => accumulator + currentValue)
    return sumV;
}

function sumOrMul(Arr, initV)
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

function funcExec()
{
    
}


const array = [1, 2, 3, 4];
console.log(adder(array))
console.log(sumOrMul([1, 2, 3, 5, 8], 5)) // (((((5 + 1) * 2) + 3) + 5) * 8) -> 160
