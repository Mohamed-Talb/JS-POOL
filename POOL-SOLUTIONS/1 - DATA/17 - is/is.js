// FUNCTION
const isNumber = (Value) => (typeof Value == 'number' && !Object.is(Value, NaN));
const isNaN = (Value) => (Object.is(Value, NaN));
const isString = (Value) => (typeof Value == 'string');
const isBoolean = (Value) => (typeof Value == "boolean");
const isUndefined = (Value) => (typeof Value == "undefined");
const isDefine = (Value) => (!isUndefined(Value));
const isArray = (Value) => (Array.isArray(Value));
const isObject = (Value) => (typeof Value == "object");
const isFunction = (Value) => (typeof Value == "function");
const isTruthly = (Value) => (Value ? true : false); // (!!Value)
const isFalsy = (Value) => (!isTruthly(Value)); // (!Value)

const is = {};

is.num = isNumber;
is.nan = isNaN;
is.str = isString;
is.bool = isBoolean;
is.undef = isUndefined;
is.def = isDefine;
is.arr = isArray;
is.obj = isObject;
is.fun = isFunction;
is.truthy = isTruthly;
is.falsy = isFalsy;

console.log(is.num(5));       // true
console.log(is.num(NaN));     // false
console.log(is.nan(NaN));     // true
console.log(is.str("hi"));    // true
console.log(is.bool(false));  // true
console.log(is.undef(undefined)); // true
console.log(is.def(0));       // true
console.log(is.arr([1,2]));   // true
console.log(is.obj({}));      // true
console.log(is.obj(null));    // true
console.log(is.fun(() => {}));// true
console.log(is.truthy(1));    // true
console.log(is.falsy(0));     // true
