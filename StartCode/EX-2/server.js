// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);
    switch(true){
        case (url === '/' && method === 'GET') :
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a simple Node.js server.</p>
                </body>
            </html>
        `);
        break;
        case (url==='/about' && method ==='GET') :
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <head><title>Home</title></head>
                    <body>
                        <h1>About us: at CADT, we love node.js! </h1>
                    </body>
                </html>
            `);
            break;
        case (url==='/contact-us' && method ==='GET') :
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <head><title>Home</title></head>
                    <body>
                        <h1>You can reach us via email...</h1>
                    </body>
                </html>
            `);
            break;
        case (url ==='/products' && method ==='GET') :
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                    <head><title>Home</title></head>
                    <body>
                        <h1>Buy one get one</h1>
                    </body>
                </html>
            `);
        break;
        case (url === 'projects' && method ==='GET') :
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(`
                <html>
                <head><title>Home</title></head>
                    <body>
                        <h1>Here are our awesome projects </h1>
                    </body>
                </html>
            `);
        break;
        // Implement more routes here
        default :{
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found');
        }
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
