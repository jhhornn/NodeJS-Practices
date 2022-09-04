const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = 'localhost';
const port = 8000;

// Add Request Listener to the server
const requestListener = function (request, response) {
    const htmlResponse = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Hello World</title>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    `;

    const jsonResponse = {
        message: "Hello World"
    };

    response.setHeader("Content-Type", "application/json");
    // response.setHeader("Content-Type", "text/html");
    response.writeHead(200);
    response.write(JSON.stringify(jsonResponse));
    response.end();
};


/**
 * Reads and returns the contents of an HTML file
 */
const htmlFileHandler = function (request, response) {
    const htmlFilePath = path.join(__dirname, "static", "index.html");
    fs.readFile(htmlFilePath, function (error, html) {
        if (error) {
            console.error(error);
            response.writeHead(500);
            response.end("Error loading HTML file");
        } else {
            response.setHeader("Content-Type", "text/html");
            response.writeHead(200);
            response.write(html);
            response.end();
        }
    });
}


// Create the server
const server = http.createServer(htmlFileHandler)
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    })