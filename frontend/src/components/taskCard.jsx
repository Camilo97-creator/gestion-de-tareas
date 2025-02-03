import { Checkbox } from "@/components/ui/checkbox";

export default function TaskCard({ task, onToggle }) {
    return (
        <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <p>{task.description}</p>
            <p className="text-sm">Prioridad: {task.priority}</p>
            <Checkbox checked={task.completed} onCheckedChange={() => onToggle(task._id)}>
                Completada
            </Checkbox>
        </div>
    );
}
