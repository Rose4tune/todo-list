import { useRouter } from "next/router";
import { useTodoStore } from "@/store/todoStore";
import TodoItem from "@/components/TodoItem";
import { useEffect, useState } from "react";
import Button from "@/components/Button";

interface TodoItem {
  id: number;
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
}

export default function TodoDetail() {
  const router = useRouter();
  const { itemId } = router.query;
  const { fetchTodos, fetchTodoDetail, updateTodo, deleteTodo } =
    useTodoStore();

  const [todo, setTodo] = useState<TodoItem | null>(null);
  const [name, setName] = useState("");
  const [memo, setMemo] = useState("");
  const [image, setImage] = useState<string | File | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const [initialMemo, setInitialMemo] = useState("");
  const [initialImage, setInitialImage] = useState<string | null>(null);
  const [initialCompleted, setInitialCompleted] = useState(false);

  useEffect(() => {
    if (itemId) {
      fetchTodoDetail(Number(itemId)).then((data) => {
        if (data) {
          setTodo(data);
          setName(data.name);
          setMemo(data.memo || "");
          setIsCompleted(data.isCompleted);
          setPreview(data.imageUrl || null);

          setInitialMemo(data.memo || "");
          setInitialImage(data.imageUrl || null);
          setInitialCompleted(data.isCompleted);
        }
      });
    }
  }, [itemId, fetchTodoDetail]);

  const handleSave = async () => {
    if (!todo) return;

    const updateData = {
      name,
      memo,
      imageUrl: typeof image === "string" ? image : preview || "",
      isCompleted: isCompleted,
    };

    await updateTodo(todo.id, updateData);
    await fetchTodos();

    router.push("/");
  };

  const handleDelete = async () => {
    if (!todo) return;
    await deleteTodo(todo.id);
    router.push("/");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (!file) return;

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("파일 크기가 5MB를 초과합니다.");
      return;
    }

    const fileName = file.name;
    const fileNameRegex = /^[a-zA-Z0-9._-]+$/;
    if (!fileNameRegex.test(fileName)) {
      alert("파일명은 영어, 숫자, _, - 만 사용할 수 있습니다.");
      return;
    }

    setImage(file);
    setPreview(file ? URL.createObjectURL(file) : initialImage);
  };

  const isChanged =
    memo !== initialMemo ||
    preview !== initialImage ||
    isCompleted !== initialCompleted;

  if (!todo) {
    return <p className="text-center mt-10">할 일을 불러오는 중...</p>;
  }

  return (
    <div className="w-full bg-white py-4 px-20 flex flex-col gap-4">
      <div onClick={() => setIsCompleted((prev) => !prev)}>
        <TodoItem
          id={todo.id}
          type={isCompleted ? "done" : "to do"}
          name={todo.name}
          isCompleted={isCompleted}
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="upload w-full lg:flex-1">
          <label className="upload-label">
            {preview ? (
              <img src={preview} alt="Uploaded" className="upload-preview" />
            ) : (
              <>
                <img
                  src="/image/placeholder.svg"
                  alt="placeholder"
                  className="upload-placeholder-icon"
                />
                <span className="upload-plus-icon"></span>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        <div className="memo w-full lg:flex-2">
          <label className="memo-label font-extra-16">Memo</label>
          <textarea
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            className="memo-textarea"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button
          type="editComplete"
          isChanged={isChanged}
          onClick={handleSave}
        />
        <Button type="delete" onClick={handleDelete} />
      </div>
    </div>
  );
}
