import TaskCard from "./taskCard";

export default function TaskList({ tasks, onToggle }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {tasks.map(task => (
                <TaskCard key={task._id} task={task} onToggle={onToggle} />
            ))}
        </div>
    );
}