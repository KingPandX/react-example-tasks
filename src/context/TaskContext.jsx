import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const taskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskID) {
    console.log(tasks);
    console.log(taskID);

    setTasks(tasks.filter((task) => task.id !== taskID));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <taskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
}
