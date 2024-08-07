import { TaskProps } from "../App";
import Trash from "../assets/trash.svg";
import Check from "../assets/check.svg";

interface ComponentsProps {
  task: TaskProps;
  toggleTaskStatus: (createDate: number) => void;
  deleteTask: (createDate: number) => void;
}

export default function Task({ task, toggleTaskStatus, deleteTask }: ComponentsProps) {
  function handleToggleStatus() {
    toggleTaskStatus(task.createDate);
  }

  function handleDeleteTask() {
    deleteTask(task.createDate);
  }

  return (
    <li className="mb-4 flex h-auto w-full items-center gap-4 rounded-md bg-[#262626] p-4">
      <button
        className={`border-2 border-[#5E60CE] bg-transparent outline-none transition-all duration-200 ease-in-out hover:bg-[#5a5dff] hover:backdrop-brightness-150 focus:outline-none ${task.isFinished ? "bg-[#5E60CE]" : "bg-none"} flex h-7 w-7 items-center justify-center rounded-full p-0`}
        onClick={handleToggleStatus}
        type="button"
      >
        {task.isFinished ? <img className="w-[70%] object-contain" src={Check} alt="Check icon" /> : null}
      </button>
      <p className={`mr-auto ${task.isFinished ? "text-[#808080] line-through" : null}`}>{task.value}</p>
      <button onClick={handleDeleteTask} type="button" className="border-0 bg-transparent p-0">
        <img className="w-8 object-contain" src={Trash} alt="Excluir item" />
      </button>
    </li>
  );
}
