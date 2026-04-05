#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

const args = process.argv.slice(2);
const guestsDir = args[0];
const outputFile = args[1];

if (!guestsDir || !outputFile) 
{
    console.error('Usage: node happiness-manager.mjs <guests-directory> <output-file.json>');
    process.exit(1);
}

async function fileExists(filePath)
{
    try 
    {
        await fs.stat(filePath);
        return true;
    } 
    catch 
    {
        return false;
    }
}

async function loadVIPs(dir) 
{
    let files;
    try 
    {
        files = await fs.readdir(dir);
    } 
    catch 
    {
        console.error(`Directory not found: ${dir}`);
        process.exit(1);
    }
    const vips = [];
    for (const file of files) 
    {
        if (!file.endsWith('.json')) continue;
        const filePath = path.join(dir, file);
        try 
        {
            const data = JSON.parse(await fs.readFile(filePath, 'utf8'));
            if (data.answer === 'yes') 
            {
                vips.push(data);
            }
        } 
        catch {}
    }
    return vips;
}

function calculateShoppingList(vips) 
{
    if (vips.length === 0) return null;
    const list = {};
    const drinkCounters = { 'iced-tea': 0, 'water': 0, 'sparkling-water': 0, 'soft': 0 };
    for (const vip of vips) 
    {
        if (!vip.drink) continue;
        const drink = vip.drink.toLowerCase();
        if (drinkCounters.hasOwnProperty(drink)) drinkCounters[drink]++;
    }
    if (drinkCounters['iced-tea'] > 0) list['iced-tea-bottles'] = Math.ceil(drinkCounters['iced-tea'] / 6);
    if (drinkCounters['water'] > 0) list['water-bottles'] = Math.ceil(drinkCounters['water'] / 4);
    if (drinkCounters['sparkling-water'] > 0) list['sparkling-water-bottles'] = Math.ceil(drinkCounters['sparkling-water'] / 4);
    if (drinkCounters['soft'] > 0) list['soft-bottles'] = Math.ceil(drinkCounters['soft'] / 4);
	let veggiesCount = 0;
	for (const vip of vips) 
	{
		if (!vip.food) continue;
		let food = vip.food.toLowerCase();
		if (food === 'everything') food = 'omnivore';
		if (['vegan', 'veggie', 'veggies'].includes(food)) veggiesCount++;
		if (food === 'carnivore') list['burgers'] = (list['burgers'] || 0) + 1;
		if (food === 'fish') list['sardines'] = (list['sardines'] || 0) + 1;
		if (food === 'omnivore') list['kebabs'] = (list['kebabs'] || 0) + 1;
	}
	if (veggiesCount > 0)
		{
		const chunks = Math.ceil(veggiesCount / 3);
		list['eggplants'] = chunks;
		list['courgettes'] = chunks;
		list['hummus'] = chunks;
		list['mushrooms'] = veggiesCount;
	}
	list['potatoes'] = vips.length;
    return list;
}

(async () => 
{
    const vips = await loadVIPs(guestsDir);
    if (vips.length === 0) 
    {
        console.log('No one is coming.');
        return;
    }
    const newList = calculateShoppingList(vips);
    let finalList = {};
    if (await fileExists(outputFile)) 
    {
        try 
        {
            const oldData = JSON.parse(await fs.readFile(outputFile, 'utf8'));
            finalList = { ...oldData, ...newList };
        } 
        catch 
        {
            finalList = newList;
        }
    } 
    else 
        finalList = newList;
    await fs.writeFile(outputFile, JSON.stringify(finalList, null, 2), 'utf8');
})();