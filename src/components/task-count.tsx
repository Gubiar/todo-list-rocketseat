interface TaskCountProps {
  count: number;
}
export default function TaskCount({ count }: TaskCountProps) {
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#333333] text-sm font-bold text-white">
      {count}
    </div>
  );
}
