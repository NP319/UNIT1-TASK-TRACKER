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

    setTasks([...tasks, newItem]);
  }

  function deleteTask(indexToDelete) {
    const newTasks = tasks.filter((task, index) => {
      return index !== indexToDelete;
    });

    setTasks(newTasks);
  }

  function toggleTask(indexToToggle) {
    const newTasks = tasks.map((task, index) => {
      if (index === indexToToggle) {
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  }


  function editTask(indexToEdit) {
    if (filter !== "all") {
      alert("Please switch to 'All' to edit tasks");
      return;
  }

  const newText = prompt("Edit your task:");

  if (!newText || newText.trim() === "") return;

  const newTasks = tasks.map((task, index) => {
    if (index === indexToEdit) {
      return { ...task, text: newText };
    } else {
      return task;
    }
  });

  setTasks(newTasks);
} 

  //FILTER 
  let filteredTasks;

  if (filter === "active") {
    filteredTasks = tasks
      .map((task, index) => ({ task, index }))
      .filter(item => item.task.completed === false);
  } else if (filter === "completed") {
    filteredTasks = tasks
      .map((task, index) => ({ task, index }))
      .filter(item => item.task.completed === true);
  } else {
    filteredTasks = tasks.map((task, index) => ({ task, index }));
  }

  return (
    <div className="container">
      <h1>Task Tracker</h1>

      <TaskInput addTask={addTask} />

      <div className="filters">
        <button onClick={() => setFilter("all")}
          style={{ backgroundColor: filter === "all" ? "pink" : "" }}>
        All</button>
        <button onClick={() => setFilter("active")}
          style={{ backgroundColor: filter === "active" ? "pink" : "" }}>
        Active</button>
        <button onClick={() => setFilter("completed")}
          style={{ backgroundColor: filter === "completed" ? "pink" : "" }}> 
        Completed</button>
      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </div>
  );
}

export default TaskTracker;