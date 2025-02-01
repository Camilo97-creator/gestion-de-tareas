const mongoose = require('mongoose'); // Coneta con mongoDB
const dotenv = require('dotenv'); // Para usar variables de entorno
dotenv.config()

const conectarBD = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {

        })
    }catch(error){
        console.error('Error en la conexion a MongoDB: ', error)
        process.exit(1)
    }
}

module.exports = conectarBD