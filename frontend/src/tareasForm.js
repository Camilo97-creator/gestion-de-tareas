import React, { useState, useEffect } from "react";
import axios from "axios";

const TaskForm = ({ task, setTasks, setEditingTask }) => {
  const [titulo, setTitulo] = useState(task ? task.titulo : "");
  const [descripcion, setDescripcion] = useState(task ? task.descripcion : "");
  const [fechaVen, setFechaVen] = useState(task ? task.fechaVen : "");
  const [prioridad, setPrioridad] = useState(task ? task.prioridad : "Normal");
  const [estado, setEstatus] = useState(task ? task.estado : "Pending");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = { titulo, descripcion, fechaVen, prioridad, estado };
    try {
      if (task) {
        await axios.put(`http://localhost:5000/api/tasks/${task._id}`, newTask, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setEditingTask(null);
      } else {
        await axios.post("http://localhost:5000/api/tasks", newTask, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
      }
      const response = await axios.get("http://localhost:5000/api/tasks", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error("Error al guardar la tarea", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <input
        type="date"
        value={fechaVen}
        onChange={(e) => setFechaVen(e.target.value)}
      />
      <select value={prioridad} onChange={(e) => setPrioridad(e.target.value)}>
        <option value="Low">Baja</option>
        <option value="Normal">Normal</option>
        <option value="High">Alta</option>
      </select>
      <select value={estado} onChange={(e) => setEstatus(e.target.value)}>
        <option value="Pending">Pendiente</option>
        <option value="Completed">Completada</option>
      </select>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default TaskForm;
