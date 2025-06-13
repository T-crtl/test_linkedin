import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = async (inputText) => {
    const response = await fakeAiParser(inputText);
    setTasks([...tasks, { id: Date.now(), text: response }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">🧠 To-Do con IA</h1>
      <TaskInput onSubmit={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

const fakeAiParser = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Tarea procesada: "${text}"`);
    }, 1000);
  });
};

export default App;