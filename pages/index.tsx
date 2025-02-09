import { useState } from "react";
import Button from "../components/Botton";
import TodoList from "../components/TodoList";

export default function TodoListPage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="max-w-lg mx-auto p-8">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          className="input px-3 py-2 flex-1"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          type="add"
          response={!!inputValue}
          onClick={() => alert("할 일 추가!")}
        />
      </div>

      <TodoList />
    </div>
  );
}
