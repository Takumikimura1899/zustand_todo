import create from 'zustand';

interface Task {
  id: string;
  title: string;
  createdAt: number;
}

interface ToDoStore {
  tasks: Task[];
  createTask: (title: string) => void;
  updateTask: (id: string, title: string) => void;
  removeTask: (id: string) => void;
}

export const useToDoStore = create<ToDoStore>((set, get) => ({
  tasks: [
    {
      id: '1',
      title: 'test',
      createdAt: Date.now(),
    },
  ],
  createTask: (title) => {
    const { tasks } = get();
    console.log(tasks);
  },
  updateTask: (id, title) => {},
  removeTask: (id) => {},
}));
