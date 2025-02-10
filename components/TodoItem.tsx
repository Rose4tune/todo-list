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
  let todoItemClass = "todo-item flex items-center";
  let todoNameClass = "todo-name";

  if (type === "done") {
    todoItemClass += " bg-violet-100";
    todoNameClass += " line-through";
  }

  return (
    <div className={todoItemClass}>
      <input
        type="checkbox"
        id={typeId}
        className="todo-checkbox"
        checked={isCompleted}
        onChange={() => toggleTodo(id, !isCompleted)}
        hidden
      />
      <label htmlFor={typeId} className="todo-label" />

      <Link href={`/items/${id}`} className={todoNameClass}>
        <span>{name}</span>
      </Link>
    </div>
  );
}
