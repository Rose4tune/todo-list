import TodoList from "@/components/TodoList";
import TodoAddBar from "@/components/TodoAddBar";

export default function TodoListPage() {
  return (
    <div className="w-full">
      <div className="flex gap-4 md:gap-6 mb-10">
        <TodoAddBar />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <TodoList type={"to do"} />
        <TodoList type={"done"} />
      </div>
    </div>
  );
}
