const http = require('http');
const hostname = '114.71.137.154';
const port = 8000;

http.createServer((req, res)=>{
    res.write('Hello');
    res.end('bye');
}).listen(port,hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
})