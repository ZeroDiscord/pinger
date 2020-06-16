
const fetch = require('node-fetch');
const express = require('express');

const app = express();

let status = 200;

app.get('/', (req, res) => {
    res.status(status).send('HEY!');
    console.log('Ping!');
});

const port = process.env.PORT || 4200

app.listen(port);
console.log(port);
setInterval(async () => {
    const response = await fetch('https://oadpoaw-unicron-bot-6.glitch.me/');
    console.log(`Status - ${response.status}`);
    status = response.status;
}, 28e4);