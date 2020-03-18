const axios = require("axios");

const apiKey = "5a7c519c881e3a85895df4e380acd142";

const getClima = async (lat,lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&&appid=${apiKey}&units=metric`);
    return resp.data.main.temp;


}

module.exports = {
    getClima
}