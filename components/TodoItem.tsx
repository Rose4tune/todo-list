import { useTodoStore } from "@/store/todoStore";

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
  let todoNameClass = "text-slate-800";

  if (type === "done") {
    todoItemClass += todoItemClass + " bg-violet-100";
    todoNameClass += todoNameClass + " line-through";
  }

  return (
    <li className={todoItemClass}>
      <input
        type="checkbox"
        id={typeId}
        className="todo-checkbox"
        checked={isCompleted}
        onChange={() => toggleTodo(id, !isCompleted)}
        hidden
      />
      <label htmlFor={typeId} className="todo-label" />
      <span className={todoNameClass}>{name}</span>
    </li>
  );
}
