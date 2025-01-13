// require your server and launch it
const server = require('./api/server');

const PORT = 9000;

server.listen(PORT, () => {
    console.log(`\n***server Running on http://localhost:${PORT} ***\n`);
});
