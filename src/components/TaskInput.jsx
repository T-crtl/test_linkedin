import React, { useState } from "react";

const TaskInput = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mb-4">
      <input
        type="text"
        placeholder="Escribe lo que necesitas hacer..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
      />
      <button
        type="submit"
        className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Procesar con IA
      </button>
    </form>
  );
};

export default TaskInput;