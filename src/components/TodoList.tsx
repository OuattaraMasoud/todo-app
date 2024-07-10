import React from "react";

type Todo = {
    id: number;
    title: string;
    description: string;
  };
  
  type TodoListProps = {
    todos: Todo[];
    onEdit: (todo: Todo) => void;
    onDelete: (id: number) => void;
  };
  
function TodoList({ todos, onEdit, onDelete }: TodoListProps) {
  return (
    <div className="w-full mt-8">
      {todos.map(todo => (
        <div key={todo.id} className="flex justify-between items-center border-b border-gray-200 py-4">
          <div>
            <h3 className="text-lg font-medium">{todo.title}</h3>
            <p className="text-gray-500">{todo.description}</p>
          </div>
          <div className="flex space-x-3">
            <button
              className="bg-teal-700 text-white px-4 py-2 rounded-xl"
              onClick={() => onEdit(todo)}
            >
              Editer
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-xl"
              onClick={() => onDelete(todo.id)}
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
