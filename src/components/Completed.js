import React from "react";
import IconCompleted from "../images/akar-icons_circle.svg";

const Completed = ({ onDelete, onCompleted, isCompleted }) => {
  const handleCompleted = () => {
    onCompleted();
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="icons">
      <button className="completed" onClick={handleCompleted}>
        {isCompleted ? (
          <img className="IconCompleted" src={IconCompleted} alt="" /> // Change this to your completed icon
        ) : (
          "" // No icon when task is incomplete
        )}
      </button>
      <button className="delete" onClick={handleDelete}></button>
    </div>
  );
};

export default Completed;
