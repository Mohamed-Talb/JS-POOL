let  Args = process.argv[2];

let result = "", slicingPos, currArg;
Args = Args.split(/\s+/);
for (let index in Args)
{
	currArg = Args[index];
	slicingPos = Math.ceil(currArg.length/2);
	Args[index] = currArg.slice(slicingPos,) + currArg.slice(0, slicingPos);
}
result = Args.join(" ");
console.log(result);