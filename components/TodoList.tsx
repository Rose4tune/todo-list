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
          <>
            <div className="character m-auto">
              <img src="/image/character-todo.svg" alt="not yet" />
            </div>
            <p className="text-gray-500 text-center">
              할 일이 없어요.<br></br>TODO를 새롭게 추가해주세요!
            </p>
          </>
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
          <>
            <div className="character m-auto">
              <img src="/image/character-done.svg" alt="not yet" />
            </div>
            <p className="text-gray-500 text-center">
              아직 다 한 일이 없어요.<br></br>해야 할 일을 체크해보세요!
            </p>
          </>
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
