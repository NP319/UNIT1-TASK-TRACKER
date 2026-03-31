import { useState } from "react";

function TaskItem({ task, index, deleteTask, toggleTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleSave = () => {
    updateTask(index, newText);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(index)}
        />

        {isEditing ? (
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none"
            }}
          >
            {task.text}
          </span>
        )}
      </div>

      <div className="task-actions">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button
          className="delete-btn"
          onClick={() => deleteTask(index)}
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default TaskItem;