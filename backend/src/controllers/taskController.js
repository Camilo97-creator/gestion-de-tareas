const Task = require("../models/Task");

const createTask = async (req, res) => {
    try {
        const { title, description, dueDate, priority } = req.body;
        const newTask = new Task({ title, description, dueDate, priority, userId: req.userId });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: "Error al crear la tarea" });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.userId });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las tareas" });
    }
};

module.exports = { createTask, getTasks };
