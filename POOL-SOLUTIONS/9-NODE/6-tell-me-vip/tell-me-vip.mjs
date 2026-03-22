import fs from 'fs'
import path from 'path'

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

function saveList(List)
{
	const content = List.map((name, i) => `${i + 1}. ${name}`).join('\n');
	fs.writeFileSync("vip.txt", content);
}

function getVipGuests(dirPath)
{
	let guestInfos, fullJSONPath;
	let vipGuests = [];
	let JSONList = fs.readdirSync(dirPath);
	for (let currentJSON of JSONList)
	{
		fullJSONPath = path.join(dirPath, currentJSON);
		guestInfos = JSON.parse(fs.readFileSync(fullJSONPath, 'utf-8'));
		if (guestInfos.answer === 'yes')
			vipGuests.push(currentJSON);
	}
	vipGuests = vipGuests.map(getFullname).sort(compareTwoStrings);
	return vipGuests;
}

let guestsInfosDir = process.argv[2];
if (guestsInfosDir === undefined)
	guestsInfosDir = './';
saveList(getVipGuests(guestsInfosDir));