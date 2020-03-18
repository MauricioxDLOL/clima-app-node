const axios = require("axios");

const getLugarLatLng = async (dir) => {

    const resp = await axios({
        "method":"GET",
        "url":"https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"devru-latitude-longitude-find-v1.p.rapidapi.com",
        "x-rapidapi-key":"ef18f4230bmshf514f3003c24184p145027jsne739633b73fc"
        },"params":{
        "location":`${dir}`
        }
    })



    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
}