import http from 'http'
// import {URL} from 'url'
import fs from 'fs'

let PORT = 5000;
let DBPath = './guests'

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
	req.on('data', (chunk) => {
		body += chunk.toString();
	});
	req.on('end', () => { 
		console.log(body);
		let guestName = req.url.slice(1);
		let guestFile = `${DBPath}/${guestName}.json`;
		let guestInfos;
		try
		{
			if (!fs.existsSync(DBPath))
				fs.mkdirSync(DBPath);
			fs.writeFileSync(guestFile, body, 'utf8');
			guestInfos = fs.readFileSync(guestFile, 'utf-8');
		}
		catch
		{
			res.writeHead(500,{'Content-Type' : 'application/json'});
			res.end(JSON.stringify({error : 'server failed'}));
			return ;
		}
		res.writeHead(201,{'Content-Type' : 'application/json'});
		res.end(guestInfos);
	});
}

const server = http.createServer((req, res) =>
{
	if (req.url === '/')
	{
		res.writeHead(201, {'Content-Type' : 'text/plain'});
		res.end('Welcome To server')
		return ;
	}
	if (req.method === 'GET')
		handlingGET(req, res);
	else if (req.method === 'POST')
		handlingPOST(req, res);
	else
	{
		res.writeHead(500,{'Content-Type' : 'application/json'});
		res.end(JSON.stringify({error : 'Unseported method'}));
		return ;
	}

});

server.listen(PORT, '0.0.0.0', () => console.log(`Server running at http://localhost:${PORT}/`));