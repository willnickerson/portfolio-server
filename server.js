const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./lib/app');


const server = http.createServer(app);

server.listen(port, () => {
    console.log('server listening on port', server.address().port);
});