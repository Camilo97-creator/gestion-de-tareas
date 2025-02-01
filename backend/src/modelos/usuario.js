const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    nombre:{type: String, require: true},
    correo:{type: String, require: true, unique:true},
    contraseña:{type: String, require: true},
});

module.exports = mongoose.model("user",userSchema);