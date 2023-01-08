const jsonServer = require("json-serve");
const server = jsonServer.create();
const router = jsonServer.router("kids.json");
const port = process.env.port || 8080
server.use(middleware);
server.use(router);
server.listen(port);
