import http from 'http'
// import {URL} from 'url'
import fs from 'fs'

let PORT = 5000;
let DBPath = './guests'

const server = http.createServer((req, res) =>
{
	if (req.url === '/')
	{
		res.writeHead(201, {'Content-Type' : 'text/plain'});
		res.end('Welcome To server')
		return ;
	}
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
});

server.listen(PORT, '0.0.0.0', () => console.log(`Server running at http://localhost:${PORT}/`));