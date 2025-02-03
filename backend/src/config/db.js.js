const mongoose = require("mongoose");

const conectarBD = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB conectado");
    } catch (error) {
        console.error("Error en la conexión a MongoDB:", error);
        process.exit(1);
    }
};

module.exports = conectarBD;
