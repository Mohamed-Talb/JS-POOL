function getAcceleration(obj) 
{
    // Formula: a = F/m
    if (typeof obj.f === "number" && typeof obj.m === "number" && obj.m !== 0) {
        return obj.f / obj.m;
    }
    // Formula: a = Δv / Δt
    if (typeof obj.Δv === "number" && typeof obj.Δt === "number" && obj.Δt !== 0) {
        return obj.Δv / obj.Δt;
    }
    // Formula: a = 2d / t^2
    if (typeof obj.d === "number" && typeof obj.t === "number" && obj.t !== 0) {
        return (2 * obj.d) / (obj.t ** 2);
    }
    return "impossible";
}

const obj = 
{
    f: 10,
    m: 5,
    Δv: 100,
    // Δt: 50,
    t: 1,
    // d: 10
}

console.log(getAcceleration(obj));             // 2