import { create } from "zustand";

interface TodoItem {
  id: number;
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
}

interface UpdateItem {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}
interface TodoState {
  todos: TodoItem[];
  fetchTodoDetail: (id: number) => Promise<TodoItem | null>;
  fetchTodos: () => Promise<void>;
  addTodo: (name: string) => Promise<void>;
  updateTodo: (id: number, updatedData: UpdateItem) => Promise<void>;
  deleteTodo: (id: number) => Promise<void>;
  toggleTodo: (id: number, isCompleted: boolean) => Promise<void>;
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

  fetchTodoDetail: async (id) => {
    const res = await fetch(
      `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${id}`
    );
    if (!res.ok) return null;
    return await res.json();
  },

  addTodo: async (name) => {
    const res = await fetch(
      `https://assignment-todolist-api.vercel.app/api/${tenantId}/items`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      }
    );
    const newTodo = await res.json();
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },

  updateTodo: async (id, updateData) => {
    const apiUrl = `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${id}`;

    try {
      const res = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      const responseJson = await res.json();

      if (!res.ok) {
        throw new Error(`서버 오류: ${res.status} ${res.statusText}`);
      }

      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? responseJson : todo
        ),
      }));
    } catch (error) {
      console.error("🚨 업데이트 실패:", error);
    }
  },

  deleteTodo: async (id) => {
    await fetch(
      `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${id}`,
      {
        method: "DELETE",
      }
    );
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
  },

  toggleTodo: async (id, isCompleted) => {
    const res = await fetch(
      `https://assignment-todolist-api.vercel.app/api/${tenantId}/items/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isCompleted }),
      }
    );
    const updatedTodo = await res.json();
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? updatedTodo : todo)),
    }));
  },
}));
