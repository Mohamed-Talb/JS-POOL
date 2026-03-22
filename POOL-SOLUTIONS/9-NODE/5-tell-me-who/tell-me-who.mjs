import fs from 'fs'

function getFullname(JsonFilename)
{
	let fullName = JsonFilename.split(".")[0].split("_");
	return `${fullName[1]} ${fullName[0]}`;
}

function compareTwoStrings(a, b)
{
	const lowerA = a.toLowerCase();
	const lowerB = b.toLowerCase();
	if (lowerA < lowerB)
		return -1;
	else if (lowerA > lowerB)
		return 1;
	else 
		return 0;
}

function printList(List)
{
	for (let i in List)
		console.log(`${Number(i)+1}. ${List[i]}`);
}

let path = process.argv[2];
if (path === undefined)
	path = './';
let guestsList = fs.readdirSync(path).map(getFullname);
guestsList = guestsList.sort(compareTwoStrings);
printList(guestsList);
