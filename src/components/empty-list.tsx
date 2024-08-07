import Clipboard from "../assets/clipboard.svg";

export default function EmptyList() {
  return (
    <div className="mt-20 flex w-full flex-col items-center justify-center gap-6">
      <img src={Clipboard} alt="Icone lista Vazia" />
      <div>
        <p className="max-w-screen-sm font-bold text-[#808080]">Você ainda não tem tarefas cadastradas</p>
        <p className="max-w-screen-sm text-[#808080]">Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
