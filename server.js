const http = require('http');
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Check if the request URL is "/home"
    if (req.url === '/home' && req.method === 'GET') {
        // Set the response status code and content type
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        // Send the "Hello World" response
        res.end('Hello World');
    } else {
        // Handle other routes with a 404 Not Found status
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Start the server and listen on the specified port
server.listen(port, (error) => {
    if (error) {
        console.error('Error starting server:', error);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});

