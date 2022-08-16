import TaskCard from "./TaskCard";
import { useContext } from "react";
import { taskContext } from "../context/TaskContext";

export function TaskList() {
  const { tasks } = useContext(taskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="justify-center align-middle text-center font-extrabold text-4xl text-slate-100">
        No hay tareas
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}
