import "../components/TodoInput.css";
import React, { useState } from "react";

const TodoInput = ({ addTask, markAsCompleted }) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTask();
    }
  };

  const handleMarkAsCompleted = () => {
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    } else {
      markAsCompleted();
    }
  };
  const isCompleted = false;
  return (
    <div className="TodoInput">
      <form className="TodoForm">
        <button
          type="button"
          className="inputIcon"
          onClick={handleMarkAsCompleted}
        >
          {isCompleted ? "" : ""}
        </button>
        <input
          type="text"
          className="todo-input"
          placeholder="Note"
          value={newTask}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </form>
      <button type="button" className="add" onClick={handleAddTask}>
        <div className="cross"></div>
      </button>
    </div>
  );
};

export default TodoInput;
