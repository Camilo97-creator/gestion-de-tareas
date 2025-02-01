const tareas = require("../modelos/tareas");
const tarea = require ("../modelos/tareas");

const crearTarea = async (req , res) => {
    try{
        const {titulo, descripcion, fechaVen, prioridad} =req.body;
        const nuevaTarea = new tarea ({titulo, descripcion, fechaVen, prioridad, userId: req.userId});
        await nuevaTarea.save();
        res.status(201).json(nuevaTarea);
    }catch(error) {
        res.status(500).json({mensaje:"Error al crear la tarea"});
    }
}

const getTarea = async (req , res) => {
    try { 
        const tarea = await tarea.find({userId: req.userId});
        res.json(tareas);
    }catch(error) {
        res.status(500).json ({mensaje: "Error al obtener tareas"});
    }
};

module.exports = {crearTarea, getTarea};