var connect = require('connect');
var port = process.env.PORT||8001;
connect.createServer(
    connect.static(__dirname)
).listen(port);