import { useTodoStore } from "@/store/todoStore";
import Link from "next/link";

interface TodoItemProps {
  id: number;
  type: "to do" | "done";
  name: string;
  isCompleted?: boolean;
}

export default function TodoItem({
  id,
  type,
  name,
  isCompleted,
}: TodoItemProps) {
  const { toggleTodo } = useTodoStore();
  const typeId = `${type}-${id}`;

  return (
    <div
      className={`todo-item flex items-center ${isCompleted ? "bg-violet-100 line-through" : ""}`}
    >
      <input
        type="checkbox"
        id={typeId}
        className="hidden todo-checkbox"
        checked={isCompleted}
        onChange={() => toggleTodo(id, !isCompleted)}
      />
      <label htmlFor={typeId} className="todo-label cursor-pointer" />
      <Link href={`/items/${id}`} className="todo-name">
        <span>{name}</span>
      </Link>
    </div>
  );
}
