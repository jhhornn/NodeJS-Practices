const http = require('http');

const { authors, books } = require('./fixtures');

const PORT = 4000
const HOST_NAME = 'localhost';

const requestHandler = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    console.log(req.url)
    console.log(req.method)
    
    switch(req.url) {
        case '/books': 
            res.end(JSON.stringify(books));
            break;
        case '/authors':
            res.end(JSON.stringify(authors));
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({
                message: 'Not Found'
            }));
    }

}

const server = http.createServer(requestHandler)

server.listen(PORT, HOST_NAME, () => {
    console.log(`Server is listening on ${HOST_NAME}:${PORT}`)
})