#!/usr/bin/env node
import fs from 'fs';
import path from 'path';  // ✅ make sure this line exists


const args = process.argv.slice(2);
const filename = args[0];
const command = args[1];
const elem = args[2];

let addNumber = args[3] !== undefined ? Number(args[3]) : 1;
let rmNumber = args[3] !== undefined ? Number(args[3]) : undefined;

if (!filename)
{
    console.error('No file specified.');
    process.exit(1);
}

const filePath = path.resolve(filename);

// Helper functions
function loadList()
{
    if (!fs.existsSync(filePath)) return {};
    try
    {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    catch
    {
        return {};
    }
}

function saveList(list)
{
    fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf8');
}

function printList(list)
{
    const keys = Object.keys(list);
    if (keys.length === 0)
    {
        console.log('Empty list.');
    }
    else
    {
        keys.forEach((k) => console.log(`- ${k} (${list[k]})`));
    }
}

// Commands
function createFile()
{
    if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, '{}', 'utf8');
}

function deleteFile()
{
    if (fs.existsSync(filePath)) fs.rmSync(filePath);
}

function addElement()
{
    if (!elem)
    {
        process.stderr.write('No elem specified.\n');
        return {};
    }
    const list = loadList();
    let number = isNaN(addNumber) ? 1 : addNumber;
    if (number < 0)
    {
        const newVal = (list[elem] || 0) + number;
        if (newVal <= 0) delete list[elem];
        else list[elem] = newVal;
    }
    else
        list[elem] = (list[elem] || 0) + number;
    saveList(list);
    return list;
}

function removeElement()
{
    if (!elem)
    {
        process.stderr.write('No elem specified.\n');
        return {};
    }
    const list = loadList();
    if (rmNumber === undefined)
    {
        if (list.hasOwnProperty(elem))
            delete list[elem];
        saveList(list);
        return list;
    }
    if (isNaN(rmNumber))
    {
        process.stderr.write('Unexpected request: nothing has been removed\n');
        return list;
    }
    if (rmNumber < 0)
    {
        list[elem] = (list[elem] || 0) - rmNumber;
        saveList(list);
        return list;
    }
    if (list.hasOwnProperty(elem))
    {
        const newVal = list[elem] - rmNumber;
        if (newVal <= 0) delete list[elem];
        else list[elem] = newVal;
    }
    saveList(list);
    return list;
}

function listElements()
{
    printList(loadList());
}

function showHelp()
{
    console.log(`Commands:
- create: takes a filename as argument and create it (should have .json extension)
- delete: takes a filename as argument and delete it
- add: add an element to the list; 3rd arg is name, 4th arg is quantity (default 1)
- rm: remove element; 3rd arg is name, 4th arg is quantity (optional)
- ls: list elements
- help: print this help`);
}

switch (command)
{
    case 'create':
        createFile();
        break;
    case 'delete':
        deleteFile();
        break;
    case 'add':
        addElement();
        break;
    case 'rm':
        removeElement();
        break;
    case 'ls':
        listElements();
        break;
	case undefined:
    	showHelp();
    	break;
    case 'help':
        showHelp();
        break;
    default:
        process.stderr.write('message\n');
        process.exit(1);
}