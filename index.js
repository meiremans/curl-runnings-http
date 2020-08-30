'use strict';

const express = require('express');
const fs = require('fs');
const { exec } = require("child_process");

// Constants
const PORT = 8001;
const HOST = '0.0.0.0';

var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

// App
const app = express();
app.post('/',jsonParser, (req, res) => {
    fs.writeFileSync('tests.json', JSON.stringify(req.body));

    exec("/home/curl-runnings -f /home/tests.json -j /home/results.json", (error, stdout, stderr) => {
        res.send(JSON.parse(fs.readFileSync('/home/results.json', 'utf8')));
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);