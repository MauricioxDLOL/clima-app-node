

const lugar = require("./lugar/lugar");
const clima = require("./clima/clima")

const argv = require("yargs").options({

    direccion: {
        alias: "d",
        desc: "Dirección de la ciudad para obtener el clima",
        demand: true
    }

}).argv;

const getInfo = async (direccion) => {

    try{

        const coords = await lugar.getLugarLatLng(direccion);

        const temperatura = await clima.getClima(coords.lat,coords.lng);
    
        return `La temperatura de ${direccion} es de ${temperatura} grados celcius`
    
    }catch(err){
        return `No se pudo determinar el clima de ${direccion}`
    }

   
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(err => {
        console.log(err);
    })


