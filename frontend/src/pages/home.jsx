import { useState, useEffect } from "react";
import { getTasks, toggleTask } from "../services/api";
import TaskList from "../components/taskList";
import TaskForm from "../components/taskForm";

export default function Home() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then(setTasks);
    }, []);

    return (
        <div>
            <h1>Gestión de Tareas</h1>
            <taskForm onTaskAdded={(task) => setTasks([...tasks, task])} />
            <taskList tasks={tasks} onToggle={toggleTask} />
        </div>
    );
}