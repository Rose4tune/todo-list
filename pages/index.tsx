import { useState } from "react";
import Button from "../components/Botton";

export default function Home() {
  const [originalValue] = useState("기존 할 일 내용");
  const [inputValue, setInputValue] = useState(originalValue);

  return (
    <div className="flex flex-col gap-4 p-8">
      <input
        type="text"
        placeholder="할 일을 수정하세요"
        className="border border-slate-300 rounded-md px-3 py-2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        type="editComplete"
        isChanged={inputValue !== originalValue}
        onClick={() => alert("수정 완료!")}
      />
      <Button
        type="add"
        response={!!inputValue}
        onClick={() => alert("할 일 추가!")}
      />
      <Button type="delete" onClick={() => alert("할 일 삭제!")} />{" "}
    </div>
  );
}
