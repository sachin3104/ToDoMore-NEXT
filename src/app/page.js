"use client";
import "./globals.css";
import Header from "@/components/header/Header";
import TaskInput from "@/components/task/TaskInput";
import TaskList from "@/components/task/TaskList";
import { useState, useEffect } from "react";

export default function Home() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  async function addTask(e) {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }

    setTask((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        title: inputValue,
        completed: false,
      },
    ]);
    setInputValue(" ");
  }

  function deleteTask(id) {
    setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function toggleComplete(id) {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  return (
    <>
      <Header />
      <TaskInput
        onAddTask={addTask}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <TaskList
        tasks={task}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </>
  );
}
