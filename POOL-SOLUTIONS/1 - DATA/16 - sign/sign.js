const sign = (Number) => (Number < 0 || Object.is(Number, -0) ? -1:1);

function sameSign(Number1, Number2)
{
    if(sign(Number1) === sign(Number2))
        return true;
    else
        return false;
}

Math.sign = undefined;
