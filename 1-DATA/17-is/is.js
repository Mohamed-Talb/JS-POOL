const is = {
   num(arg)
   {
        return typeof arg === "number" && !isNaN(arg);
   },
   nan(arg)
   {
        return typeof arg === "number" && isNaN(arg);            
   },
   str(arg)
   {
        if (typeof arg == "string")
            return true;
        return false;  
   },
   bool(arg)
   {
        if (typeof arg == "boolean")
            return true;
        return false;  
   },
   undef(arg)
   {
        if (arg === undefined)
            return true;
        return false;  
   },
   def(arg)
   {
        if (typeof arg == "undefined")
            return false;
        return true;  
   },
   arr(arg)
   {
        if (Array.isArray(arg))
            return true;
        return false;  
   },
   obj(arg)
   {
        return arg !== null && typeof arg === "object" && !Array.isArray(arg); 
   },
   fun(arg)
   {
        if (typeof arg == "function")
            return true;
        return false;     
   },
   truthy(arg)
   {
        if (arg)
            return true;
        return false; 
   },
   falsy(arg)
   {
        if (!arg)
            return true;
        return false; 
   },
}

let x;
let y = 9;
let myarray = [1337, "42", "mtaleb", undefined];

// console.log(is.num(10));
// console.log(is.nan(NaN));
// console.log(is.str("hello"));
// console.log(is.bool(true));
// console.log(is.undef(x));
// console.log(is.def(y));
// console.log(is.arr(myarray));
// console.log(is.fun(is.arr));
// console.log(is.truthy(true));
// console.log(is.truthy({}));
// console.log(is.truthy(Infinity));
// console.log(is.falsy(""));
// console.log(is.falsy(-0));
// console.log(is.falsy(NaN));