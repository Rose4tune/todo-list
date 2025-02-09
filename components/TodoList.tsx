import React, { useEffect } from "react";
import { useTodoStore } from "@/store/todoStore";
import Chip from "./Chip";
import TodoItem from "./TodoItem";
import TodoBlank from "./TodoBlank";

interface TodoListProps {
  type: "to do" | "done";
}

export default function TodoList({ type }: TodoListProps) {
  const { todos, fetchTodos } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, []);

  const items = {
    "to do": todos.filter((todo) => !todo.isCompleted),
    ["done"]: todos.filter((todo) => todo.isCompleted),
  };

  return (
    <section className="w-full lg:w-1/2">
      <Chip type={type} />
      {items[type].length === 0 ? (
        <TodoBlank type={type} />
      ) : (
        <ul className="space-y-3 py-3">
          {items[type].map(({ id, name }) => (
            <TodoItem id={id} type={type} name={name} key={type + id} />
          ))}
        </ul>
      )}
    </section>
  );
}
