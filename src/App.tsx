import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "./Components/Header/Header";
import { NewTask } from "./Components/NewTask/NewTask";
import { TasksMain } from "./Components/Tasks/TasksMain";

type Task = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addNewTask(newTaskTitle: string) {
    const id = new Date().getTime().toString();
    const newTask: Task = { id, title: newTaskTitle, isCompleted: false };
    setTasks((state) => [...state, newTask]);
  }

  function removeTask(taskId: string) {
    setTasks((state) => {
      return state.filter((taskItem) => taskItem.id !== taskId);
    });
  }

  function toggleStateCompleteTask(taskId: string) {
    setTasks((state) => {
      return state.map((taskItem) => {
        if (taskItem.id === taskId) {
          return {
            ...taskItem,
            isCompleted: !taskItem.isCompleted,
          };
        }
        return taskItem;
      });
    });
  }

  return (
    <div className={styles.app}>
      <Header />
      <NewTask onCreateNewTask={addNewTask} />
      <TasksMain
        onCompleteTask={toggleStateCompleteTask}
        onRemoveTask={removeTask}
        tasks={tasks}
      />
    </div>
  );
}
