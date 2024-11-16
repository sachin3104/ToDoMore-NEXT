"use client";
import { useState } from "react";

const TaskInput = ({ onAddTask, inputValue, setInputValue }) => {
  return (
    <div className="flex items-center justify-center gap-4 p-4 bg-gray-100 rounded shadow-md">
      <input
        type="text"
        value={inputValue}
        placeholder="Add new Task"
        onChange={(e) => setInputValue(e.target.value)}
        className="w-3/4 px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />
      <button
        onClick={onAddTask}
        className="px-4 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
