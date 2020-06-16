
const fetch = require('node-fetch');

setInterval(async () => {

    const response = await fetch('https://oadpoaw-unicron-bot-6.glitch.me/');
    console.log(`Status - ${response.status}`);

}, 280000);