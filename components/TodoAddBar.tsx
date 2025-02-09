import { useState } from "react";
import Button from "@/components/Button";
import { useTodoStore } from "@/store/todoStore";

export default function TodoAddBar() {
  const [inputValue, setInputValue] = useState("");
  const { addTodo } = useTodoStore();

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    addTodo(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTodo();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="input flex-1 focus:outline-violet-600"
      />
      <Button
        type="add"
        response={inputValue.trim() !== ""}
        onClick={handleAddTodo}
      />
    </>
  );
}
