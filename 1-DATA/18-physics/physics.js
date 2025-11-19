const object = {
    f: 10,
    m: 5,
    Δv: 100,
    Δt: 50,
    t:1,
    d: 10
}

function getAcceleration(obj)
{
    if ("f" in obj && "m" in obj)
        return (obj.f / obj.m);
    if ("Δv" in obj && "Δt" in obj)
        return (obj.Δv / obj.Δt);
    if ("d" in obj && "t" in obj)
        return ((2*obj.d) / obj.t ** 2);
    return "impossible";
}

const obj1 = {
    f: 10,
    Δv: 100,
    Δt: 50,
    d: 10
}

const obj2 = {
    f: 10,
    Δt: 50,
    t:1,
    d: 10
}
console.log(getAcceleration(obj1));
console.log(getAcceleration(obj2));