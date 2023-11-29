import React, { useState } from "react";
import TodoInput from "./TodoInput";
import DateTimeElement from "./DateTimeElement";
import Completed from "./Completed";

function Todo() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const timestamp = formatTimestamp(new Date());
    const taskWithTimestamp = {
      content: newTask,
      timestamp: timestamp,
      isCompleted: false,
    };
    setTasks([...tasks, taskWithTimestamp]);
  };

  const formatTimestamp = (date) => {
    const options = { hour: "numeric", minute: "numeric" };
    const today = new Date();

    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return `Today at ${date.toLocaleTimeString(undefined, options)}`;
    } else {
      const day = date.toLocaleDateString(undefined, { weekday: "short" });
      const dateFormatted = date.toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
      });
      return `${day}, ${dateFormatted} at ${date.toLocaleTimeString(
        undefined,
        options
      )}`;
    }
  };
  const handleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const markAsCompleted = (index) => {
    if (tasks[index]) {
      const updatedTasks = [...tasks];
      updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
      setTasks(updatedTasks);
    }
  };

  const handleMarkAsCompleted = (index) => {
    markAsCompleted(index); // Function to mark a specific task as completed
  };

  return (
    <div className="Todo">
      <DateTimeElement />
      <div className="Todolist">
        <TodoInput addTask={addTask} markAsCompleted={handleMarkAsCompleted} />
        <div className="list">
          {tasks.map((task, index) => (
            <div className="TodoTask" key={index}>
              <div className="todoP">
                <p className={task.isCompleted ? "" : "task"}>{task.content}</p>
                <p className="timestamp">{task.timestamp}</p>
              </div>
              <div className="complete">
                {/* Pass appropriate props to the Completed component */}
                <Completed
                  onCompleted={() => handleCompleted(index)}
                  onDelete={() => handleDelete(index)}
                  isCompleted={task.isCompleted}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Todo;
