
const fetch = require('node-fetch');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'hehehe',
    });
    console.log('received');
})

app.listen(process.env.PORT);

setInterval(async () => {

    const response = await fetch('https://oadpoaw-unicron-bot-6.glitch.me/');
    console.log(`Status - ${response.status}`);

}, 280000);