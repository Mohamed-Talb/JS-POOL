import http from 'http'
// import {URL} from 'url'
import fs from 'fs'

let PORT = 5000;
let guestsList = fs.readdirSync('./guests');
const server = http.createServer((req, res) =>
{
	if (req.url === '/')
	{
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('Welcome To server');
	}
	else 
	{
		console.log(req.url);
		let guestName = req.url.slice(1, );
		let guestFile = `./guests/${guestName}.json`;

		if (!guestsList.includes(`${guestName}.json`))
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
				res.end(JSON.stringify({error : 'Server faild'}));
			}
			res.writeHead(200,{'Content-Type' : 'application/json'});
			res.end(guestInfos);
		}
	}
})

server.listen(PORT, 'localhost', () => console.log(`Server running at http://localhost:${PORT}/`));