const app = require('./app');
require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 5000;

app.listen(serverPort, () => console.log(`Server is running on port ${serverPort}`));
