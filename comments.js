// Create web server   
// Import the required modules
const http = require('http'); // HTTP module

// Define the hostname and port number
const hostname = '127.0.0.1'; // localhost
const port = 3000; // You can change this to any available port you prefer

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the HTTP response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send a response to the client
  res.end('Hello, World!\n');
});

// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
