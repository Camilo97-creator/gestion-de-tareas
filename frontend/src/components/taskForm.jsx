import { useState } from "react";
import { addTask } from "../services/api";

export default function TaskForm({ onTaskAdded }) {
    const [newTask, setNewTask] = useState({ title: "", description: "", priority: "low" });

    const handleSubmit = async () => {
        const task = await addTask(newTask);
        onTaskAdded(task);
        setNewTask({ title: "", description: "", priority: "low" });
    };

    return (
        <div>
            <input placeholder="Título" value={newTask.title} onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} />
            <button onClick={handleSubmit}>Agregar Tarea</button>
        </div>
    );
}