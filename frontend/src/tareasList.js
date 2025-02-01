import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setTasks(response.data);
      } catch (error) {
        console.error("Error al obtener tareas", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tareas</h2>
      <TaskForm task={editingTask} setTasks={setTasks} setEditingTask={setEditingTask} />
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task._id} task={task} setEditingTask={setEditingTask} setTasks={setTasks} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
