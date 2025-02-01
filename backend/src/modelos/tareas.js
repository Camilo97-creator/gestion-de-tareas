const mongoose = require ('mongoose');

const taskSchema = new mongoose.Schema({
    titulo:{type: String, require: true},
    descripcion: {type: String, require: true},
    fechaVen: Date,
    prioridad: {type: String, enum: ["Alta","Media","Baja"], default: "Media"},
    estado: {type: String, enum: ["Pendiente","Completada"], default: "Pendiente"},
    userId: {type: mongoose.Schema.Types.objectId, ref:"User",require:true},
});

module.exports = mongoose.model("tarea",taskSchema);