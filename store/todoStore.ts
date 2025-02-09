import { create } from "zustand";

interface TodoItem {
  id: number;
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
}

interface TodoState {
  todos: TodoItem[];
  fetchTodos: () => Promise<void>;
}

const tenantId = "YeSeo-Lee";

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],

  fetchTodos: async () => {
    const res = await fetch(
      `https://assignment-todolist-api.vercel.app/api/${tenantId}/items`
    );
    const data = await res.json();
    set({ todos: data });
  },
}));
