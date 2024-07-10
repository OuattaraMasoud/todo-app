import React, { useState, useEffect } from "react";

type Todo = {
  id: number;
  title: string;
  description: string;
};

type TodoFormProps = {
  onSave: (todo: Partial<Todo>) => void;
  currentTodo: Partial<Todo> | null;
};

function TodoForm({ onSave, currentTodo }: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentTodo) {
      setTitle(currentTodo.title || "");
      setDescription(currentTodo.description || "");
    }
  }, [currentTodo]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSave({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mt-8">
      <div className="mb-4">
        <label className="text-lg font-medium">Titre</label>
        <input
          type="text"
          className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Entrez le titre"
        />
      </div>
      <div className="mb-4">
        <label className="text-lg font-medium">Description</label>
        <textarea
          className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Entrez la description"
        />
      </div>
      <button
        type="submit"
        className="bg-teal-700 text-white px-6 py-3 rounded-xl font-medium text-base w-full lg:w-auto"
      >
        {currentTodo ? "Mettre à jour" : "Créer"}
      </button>
    </form>
  );
}

export default TodoForm;
