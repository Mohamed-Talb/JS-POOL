import fs from 'fs';

function tellItCypher(inputFile, option, outputFile)
{
	if (!inputFile || !option)
	{
		console.error("Usage: node tell-it-cypher.mjs <file> <encode|decode> [outputFile]");
		return;
	}
	const content = fs.readFileSync(inputFile, 'utf-8');
	let result;
	let defaultName;
	if (option === "encode")
	{
		result = Buffer.from(content, 'utf-8').toString('base64');
		defaultName = "cypher.txt";
	}
	else if (option === "decode")
	{
		result = Buffer.from(content, 'base64').toString('utf-8');
		defaultName = "clear.txt";
	}
	else
		throw new Error("Invalid option: use 'encode' or 'decode'");
	const finalOutput = outputFile || defaultName;
	fs.writeFileSync(finalOutput, result);
}

const inputFile = process.argv[2];
const option = process.argv[3];
const outputFile = process.argv[4];

tellItCypher(inputFile, option, outputFile);