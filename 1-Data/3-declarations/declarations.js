const name = "hello worlds ` \" \' \/"
const arr = [4, '2']

const obj = {
    str : "moahmed taleb",
    num : 1337,
    bool : true,
    undef : undefined
};

const nested = 
{
    arr : [4, undefined, '2'],
    obj : 
    {
        str : "moahmed taleb",
        num : 1337,
        bool : true,
    }
};

console.log(name)
console.log(arr)
console.log(obj)
console.log(nested)

Object.freeze(arr);
Object.freeze(obj);
Object.freeze(nested);

obj.num = 44;
console.log(obj.num);