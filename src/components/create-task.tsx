import { useState } from "react";
import { TaskProps } from "../App";
import Plus from "../assets/plus.svg";

interface CreateTaskProps {
  createFunction: React.Dispatch<React.SetStateAction<TaskProps[]>>;
}

export default function CreateTask({ createFunction }: CreateTaskProps) {
  const [inputValue, setInputValue] = useState("");

  const handleCreateTask = () => {
    if (inputValue.trim() === "") return; // Impede a criação de tarefas vazias

    const task: TaskProps = {
      createDate: Date.now(),
      isFinished: false,
      value: inputValue,
    };

    createFunction((prevTasks) => [...prevTasks, task]);
    setInputValue(""); // Limpa o campo de entrada após a criação da tarefa
  };

  return (
    <form className="flex w-full gap-4" onSubmit={(e) => e.preventDefault()}>
      <input
        className="h-14 w-full rounded-lg border border-[#0D0D0D] bg-[#262626] p-4"
        type="text"
        placeholder="Adicionar uma nova tarefa"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="flex h-14 w-24 min-w-24 items-center justify-center gap-2 border border-none border-blue-500 bg-blue-500 font-bold text-white transition-all duration-300 ease-in-out hover:border-blue-700 hover:bg-blue-700"
        type="button"
        onClick={handleCreateTask}
      >
        Criar
        <img src={Plus} alt="Icone criar tarefa" />
      </button>
    </form>
  );
}
