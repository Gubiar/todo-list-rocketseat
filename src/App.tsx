import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import CreateTask from "./components/create-task";
import TaskCount from "./components/task-count";
import EmptyList from "./components/empty-list";
import Task from "./components/task";

export interface TaskProps {
  isFinished: boolean;
  value: string;
  createDate: number;
}

export default function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function getCompletedTasks(): number {
    return tasks.filter((task) => task.isFinished).length;
  }

  function toggleTaskStatus(createDate: number) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.createDate === createDate ? { ...task, isFinished: !task.isFinished } : task)),
    );
  }

  function deleteTask(createDate: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.createDate != createDate));
  }

  return (
    <div className="flex min-h-dvh w-dvw flex-col items-start justify-start">
      <header className="relative flex h-44 w-full flex-col items-center justify-center bg-[#0D0D0D]">
        <img className="absolute w-auto object-contain" src={logo} alt="Logo" />
        <div className="absolute bottom-[-25%] w-full max-w-[1024px] p-4">
          <CreateTask createFunction={setTasks} />
        </div>
      </header>
      <main className="ml-auto mr-auto mt-16 w-full max-w-[1024px] p-4">
        <header className="p flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <h4 className="text-l font-bold text-blue-500">Tarefas Criadas</h4>
            <TaskCount count={tasks.length} />
          </div>
          <div className="flex items-center gap-2">
            <h4 className="text-l font-bold text-blue-500">Concluídas</h4>
            <TaskCount count={getCompletedTasks()} />
          </div>
        </header>

        {tasks.length == 0 ? (
          <EmptyList />
        ) : (
          <ul className="w-full pt-4">
            {tasks.map((value) => (
              <Task key={value.createDate} task={value} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
