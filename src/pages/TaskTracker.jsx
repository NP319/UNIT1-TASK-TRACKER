import { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  function addTask(newTask) {
    const newItem = {
      text: newTask,
      completed: false
    };

    const newTasks = [...tasks, newItem];
    setTasks(newTasks);
  }

  function deleteTask(indexToDelete) {
    const newTasks = tasks.filter(function(task, index) {
      return index !== indexToDelete;
    });

    setTasks(newTasks);
  }

  function toggleTask(indexToToggle) {
    const newTasks = tasks.map(function(task, index) {
      if (index === indexToToggle) {
        return {
          text: task.text,
          completed: !task.completed
        };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  }

  function updateTask(indexToUpdate, newText) {
    const newTasks = tasks.map(function(task, index) {
      if (index === indexToUpdate) {
        return {
          text: newText,
          completed: task.completed
        };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  }

  let filteredTasks;

  if (filter === "active") {
    filteredTasks = tasks.filter(function(task) {
      return task.completed === false;
    });
  } else if (filter === "completed") {
    filteredTasks = tasks.filter(function(task) {
      return task.completed === true;
    });
  } else {
    filteredTasks = tasks;
  }

  return (
    <div className="container">
      <h1>Task Tracker</h1>

      <TaskInput addTask={addTask} />

      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default TaskTracker;