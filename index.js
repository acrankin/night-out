require('dotenv').config();
require('./lib/util/connect')();
const { createServer } = require('http');
const app = require('./lib/app');

const port = process.env.PORT || 7980;

const server = createServer(app);

server.listen(port, () => {
    /* eslint-disable-next-line no-console */
    console.log(`Listening on ${port}`);
});
