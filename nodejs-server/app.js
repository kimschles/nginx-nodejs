'use strict';

const express = require('express');
const moment = require('moment');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const TIME = moment().format('MMMM Do YYYY, h:mm:ss a')
const currentTime = `This Node.js server started at ${TIME}`;

// App
const app = express();
app.use(express.json())
app.get('/', (req, res) => {
    res.send({"message": "Hello Denver Node.js!", "time": currentTime});
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);