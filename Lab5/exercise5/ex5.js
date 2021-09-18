let events = require('events');
var eventEmitter = new events.EventEmitter();

const url = require('url');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

let handleMax = () => {
    console.log("Jackpot!!!");
}

eventEmitter.on('jackpot', handleMax);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Slot Machine\n');
    var queryString = req.url.toLowerCase();
    let query = url.parse(req.url, true);

    if (req.url.includes("/favicon.ico"))
        return;

    if (queryString.includes("spin")) {
        console.log("spinning..");
    } else if (queryString.includes("play")) {
        if (query.query.amount) {
            if (query.query.amount === "max") {
                eventEmitter.emit('jackpot');
            } else {
                console.log(`playing..amount : ${query.query.amount}`);    
            }
        } else {
            console.log("playing..");
        }
        
    } else {
        console.log("Please play or spin");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log("Please play or spin")
});

