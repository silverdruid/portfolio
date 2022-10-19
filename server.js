const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'contentType': 'text/html' })
    const url = req.url;
    if (url === '/home') {
        res.write('home')
        res.end('home')
    } else {
        console.log('error');
    }
})
server.listen(5500, () => {
    console.log('server is connected');
})