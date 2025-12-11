const first = (Arg) => {return Arg[0]};
const last = (Arg) => {return Arg[Arg.length - 1]};
const kiss = (Arg) => {
    const RKiss = [Arg[0], Arg[Arg.length - 1]];
    return RKiss;
};


const arr = [1, "2", undefined, "hello wolrd"];
const str = "mohamed Taleb";
console.log(first(arr));
console.log(last(str));
console.log(kiss(arr));