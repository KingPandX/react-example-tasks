import { useState, useContext } from "react";
import { taskContext } from "../context/TaskContext";

export function TaskForm() {
  const [NTask, setNTask] = useState("");
  const [DTask, setDTask] = useState("");

  const { createTask } = useContext(taskContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (NTask !== "") {
      createTask({ title: NTask, description: DTask });
    } else if (DTask !== "") {
      createTask({ title: NTask, description: DTask });
    } else return;

    setNTask("");
    setDTask("");
  };
  return (
    <div className="max-w-md mx-auto">
      
      <form className="bg-slate-800 p-10 mb-4 rounded-xl shadow-lg shadow-green-500 animate-pulse hover:animate-none" onSubmit={HandleSubmit}>
      <h1 className="text-white text-2xl font-bold mb-3">Crea tu tarea</h1>
      <input className="bg-slate-300 p-3 w-full mb-2 "
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => setNTask(e.target.value)}
        value={NTask}
        autoFocus
      />
      <textarea className="bg-slate-300 p-3 w-full mb-2"
        placeholder="Escribe la descripcion de la tarea"
        onChange={(e) => setDTask(e.target.value)}
        value={DTask}
      ></textarea>
      <button className="bg-green-500 rounded-md p-3 w-full mb-2 hover:bg-green-400 text-white font-bold">Guardar</button>
    </form>
    </div>
  );
}
