
const fetch = require('node-fetch');
const express = require('express');

const app = express();
const url = "" // add url to ping here
let status = 404;

app.get('/', (req, res) => {
    res.status(status).send('HEY!');
    console.log('Ping!');
});

const port = process.env.PORT || 4200;

app.listen(port);
console.log(port);
setInterval(async () => {
    const response = await fetch('url');
    console.log(`Status - ${response.status}`);
    status = response.status;
}, 30e4);
