import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTask, editTask }) {
  return (
    <div>
      {tasks.map(({ task, index }) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;