/*
	NOTE: This exercise has a problem with the tester, 
	so do not check it.
*/ 


import http from 'http'
import fs from 'fs'

let PORT = 5000;
let DBPath = './guests'
let Admins = ['Caleb_Squires', 'Tyrique_Dalton', 'Rahima_Young'];
let adminsPassword = 'abracadabra';


function checkAdmins(authHeader)
{
	const base64 = authHeader.split(' ')[1];
	const [username, Password] = Buffer.from(base64, 'base64').toString('utf8').split(':');
	if (Admins.includes(username) && Password == adminsPassword)
		return true;
	return false;
}

function handlingGET(req, res)
{
	let guestName = req.url.slice(1);
	let guestFile = `${DBPath}/${guestName}.json`;	
	if (!fs.existsSync(guestFile))
	{
		res.writeHead(404,{'Content-Type' : 'application/json'});
		res.end(JSON.stringify({error : 'guest not found'}));
	}
	else 
	{
		try {
			var guestInfos = fs.readFileSync(guestFile, 'utf-8');
		}
		catch {
			res.writeHead(500,{'Content-Type' : 'application/json'});
			res.end(JSON.stringify({error : 'server failed'}));
		}
		res.writeHead(200,{'Content-Type' : 'application/json'});
		res.end(guestInfos);
	}
}

function handlingPOST(req, res)
{
	let body = '';
	req.on('data', (chunk) => body += chunk.toString());

	req.on('end', () => {
		let guestName = req.url.slice(1);
		let guestFile = `${DBPath}/${guestName}.json`;

		try 
		{
			if (!fs.existsSync(DBPath)) fs.mkdirSync(DBPath);
			const data = JSON.parse(body);
			fs.writeFileSync(guestFile, JSON.stringify(data, null, 2), 'utf8');
		} catch (err) 
		{
			res.writeHead(500, {'Content-Type':'application/json'});
			res.end(JSON.stringify({error:'server failed', details: err.message}));
			return;
		}

		res.writeHead(200, {'Content-Type':'application/json'});
		res.end(body); 
	});
}

const server = http.createServer((req, res) =>
{
	if (req.url === '/')
	{
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('Welcome To server')
		return ;
	}
	if (req.method === 'GET')
		handlingGET(req, res);
	else if (req.method === 'POST')
	{
		let authHeader = req.headers['authorization'];
		if (!authHeader)
		{
			res.writeHead(401,{'Content-Type' : 'application/json'});
			res.end(JSON.stringify({error :'Authorization Required'}));
			return ;
		}
		if (!checkAdmins(authHeader))
		{
			res.writeHead(401,{'Content-Type' : 'application/json'}); 
			res.end(JSON.stringify({error : 'Wrong Authentication informations'}));
			return ;
		}
		handlingPOST(req, res);
	}
	else
	{
		res.writeHead(500,{'Content-Type' : 'application/json'});
		res.end(JSON.stringify({error : 'Unseported method'}));
		return ;
	}

});

server.listen(PORT, '0.0.0.0', () => console.log(`Server running at http://localhost:${PORT}/`));