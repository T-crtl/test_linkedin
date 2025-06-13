import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <ul className="w-full max-w-md space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="bg-white p-3 rounded shadow">
          {task.text}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;