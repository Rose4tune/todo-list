import React, { useEffect } from "react";
import { useTodoStore } from "@/store/todoStore";
import Chip from "./Chip";

export default function TodoList() {
  const { todos, fetchTodos, toggleTodo } = useTodoStore();

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
          <ul className="space-y-3 py-3">
            {todoItems.map((todo) => (
              <li
                key={todo.id}
                className="todo-item flex justify-between items-center"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id, !todo.isCompleted)}
                    className="todo-checkbox"
                  />
                  <input
                    type="checkbox"
                    id={`todo-${todo.id}`}
                    className="todo-checkbox"
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id, !todo.isCompleted)}
                    hidden
                  />
                  <label htmlFor={`todo-${todo.id}`} className="todo-label" />
                  <span>{todo.name}</span>
                </div>
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
          <ul className="space-y-3 py-3">
            {doneItems.map((todo) => (
              <li
                key={todo.id}
                className="todo-item flex justify-between items-center bg-violet-100"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`done-${todo.id}`}
                    className="todo-checkbox"
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id, !todo.isCompleted)}
                    hidden
                  />
                  <label htmlFor={`done-${todo.id}`} className="todo-label" />
                  <span className="line-through text-gray-500">
                    {todo.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
