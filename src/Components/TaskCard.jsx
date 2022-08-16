import { useContext } from "react";
import { taskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(taskContext);

  return (
    <div className="bg-gray-800 p-4 rounded-md text-white capitalize shadow-md shadow-gray-900">
      <h1 className="text-center">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 rounded-md p-1 font-bold text-center mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}
