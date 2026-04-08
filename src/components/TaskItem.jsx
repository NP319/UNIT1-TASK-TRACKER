import React from "react";

function TaskItem({ task, deleteTask, toggleTask, editTask, index }) {
  return (
    <div className="task-item">

      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(index)}
        />

        <span
          style={{
            textDecoration: task.completed ? "line-through" : "none"
          }}
        >
          {task.text}
        </span>
      </div>

      <div className="task-actions">
        <button
          className="delete-btn"
          onClick={() => deleteTask(index)}
        >
          Delete
        </button>
        <button onClick={() => editTask(index)}>
          Edit
        </button>
      </div>

    </div>
  );
}

export default TaskItem;