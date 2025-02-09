import React, { useEffect } from "react";
import { useTodoStore } from "@/store/todoStore";
import Chip from "./Chip";

export default function TodoList() {
  const { todos, fetchTodos } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, []);

  const todoItems = todos.filter((todo) => !todo.isCompleted);
  const doneItems = todos.filter((todo) => todo.isCompleted);

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <section className="w-full lg:w-1/2">
        <Chip type={"to do"} />
        {todoItems.length === 0 ? (
          <p className="text-gray-500">할 일이 없습니다.</p>
        ) : (
          <ul className="space-y-2">
            {todoItems.map((todo) => (
              <li key={todo.id}>
                <span>{todo.name}</span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="w-full lg:w-1/2">
        <Chip type={"done"} />
        {doneItems.length === 0 ? (
          <p className="text-gray-500">완료된 할 일이 없습니다.</p>
        ) : (
          <ul className="space-y-2">
            {doneItems.map((todo) => (
              <li key={todo.id}>
                <span>{todo.name}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
