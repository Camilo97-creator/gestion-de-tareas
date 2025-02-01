import React from "react";
import axios from "axios";

const TaskItem = ({ task, setEditingTask, setTasks }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setTasks((prevTasks) => prevTasks.filter((t) => t._id !== task._id));
    } catch (error) {
      console.error("Error al eliminar tarea", error);
    }
  };

  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => setEditingTask(task)}>Editar</button>
      <button onClick={handleDelete}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
