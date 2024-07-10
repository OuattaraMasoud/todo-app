import React, { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { CiSearch } from "react-icons/ci";

type Todo = {
  id: number;
  title: string;
  description: string;
};

export default function HomePage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentTodo, setCurrentTodo] = useState<Partial<Todo> | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Load todos from an API or local data source
    setTodos([
      {
        id: 1,
        title: "Apprendre React",
        description: "Apprendre les bases de React",
      },
      {
        id: 2,
        title: "Construire une Todo App",
        description: "Utiliser React pour construire une Todo App",
      },
    ]);
  }, []);

  const handleSave = (todo: Partial<Todo>) => {
    if (currentTodo && currentTodo.id !== undefined) {
      setTodos(
        todos.map((t) => (t.id === currentTodo.id ? { ...t, ...todo } : t))
      );
    } else {
      const newTodo = { ...todo, id: Date.now() } as Todo;
      setTodos([...todos, newTodo]);
    }
    setCurrentTodo(null);
  };

  const handleEdit = (todo: Todo) => {
    setCurrentTodo(todo);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const filteredTodos = todos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white px-10 py-20 mt-20 md-20 border-2 border-gray-100 rounded-3xl w-full lg:w-2/3 mx-auto">
      <h1 className="text-5xl font-semibold">Todo List</h1>
      <p className="text-lg font-medium text-gray-500 mt-4">
        Gérer vos tâches facilement!
      </p>
      <div className="mt-8 relative">
        <input
          type="text"
          className="w-full border-2 rounded-xl border-gray-100 p-4 pl-10 mt-1 bg-transparent"
          placeholder="Rechercher..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <CiSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={24}
        />
      </div>
      <table className="mt-8 w-full border-collapse border border-gray-200 rounded-xl">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-200 px-4 py-2">ID</th>
            <th className="border border-gray-200 px-4 py-2">Titre</th>
            <th className="border border-gray-200 px-4 py-2">Description</th>
            <th className="border border-gray-200 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo) => (
            <tr key={todo.id} className="border-b border-gray-200">
              <td className="border border-gray-200 px-4 py-2">{todo.id}</td>
              <td className="border border-gray-200 px-4 py-2">{todo.title}</td>
              <td className="border border-gray-200 px-4 py-2">{todo.description}</td>
              <td className="border border-gray-200 px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded-xl mr-2"
                  onClick={() => handleEdit(todo)}
                >
                  Modifier
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded-xl"
                  onClick={() => handleDelete(todo.id)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TodoForm onSave={handleSave} currentTodo={currentTodo} />
    </div>
  );
};


