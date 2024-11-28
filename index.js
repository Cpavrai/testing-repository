const axios = require("axios");
require('dotenv').config();

const fetch_ip_address = () => {
  axios
    .get(process.env.IF_CONFIG_URL)
    .then(r => console.log("Your router IP address is :", r.data))
}

const getPictureOfTheDay = () => {
  axios.get(`${process.env.APOD_URL}?api_key=${process.env.APOD_KEY || "DEMO_KEY"}`).then(response => console.log(`Votre image du jour est disponible :`, response.data.url));
}

fetch_ip_address();
getPictureOfTheDay();
