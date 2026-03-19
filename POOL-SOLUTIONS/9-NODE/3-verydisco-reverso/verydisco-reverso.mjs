import fs from 'fs'

let  fileName = process.argv[2];

let content = fs.readFileSync(fileName, 'utf-8');

let result = "", slicingPos, currArg;
content = content.split(/\s+/);
for (let index in content)
{
	currArg = content[index];
	slicingPos = Math.floor(currArg.length/2);
	content[index] = currArg.slice(slicingPos,) + currArg.slice(0, slicingPos);
}
result = content.join(" ");
console.log(result);