import fs from 'fs'

function getFullname(JsonFilename)
{
	let fullName 
	JsonFilename.split(".")[0];
}


let path = process.argv[2];
if (path === undefined)
	path = './';
let namesList = fs.readdirSync(path).map(getFullname);

console.log(content);
