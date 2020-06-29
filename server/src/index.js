const express = require('express');
const path = require('path');
const cors = require('cors');

/* Import Debug module
 *  These modules are used in place of 'console.log' to keep the terminal from being
 *  filled with unnecessary items during production runs
 * */
const serverDebug = require('debug')('server:startup');

const app = express();
app.use(express.json());
app.use(cors());

// Serve up the dist folder from the client at the defined PORT
app.use('/', express.static(path.resolve(__dirname, '../../client/dist')));

/* This is to allow the app to send the dist html file no matter the params in the request */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

app.listen(3004, () => {
  serverDebug(`Server running on port: 3004`);
});
