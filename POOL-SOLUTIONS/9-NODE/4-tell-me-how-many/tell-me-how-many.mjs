import fs from 'fs'

let path = process.argv[2];
if (path === undefined)
	path = './';
const content = fs.readdirSync(path);
console.log(content.length);
