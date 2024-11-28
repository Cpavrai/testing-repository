const axios = require("axios");

const fetch_ip_address = () => {
  axios
    .get("https://ifconfig.me")
    .then(resp => console.log("Your router IP address is :", resp.data))
}

const getPictureOfTheDay = () => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY").then(resp => console.log("Votre image du jour est disponible :", resp.data.url))
}

fetch_ip_address();
getPictureOfTheDay();
