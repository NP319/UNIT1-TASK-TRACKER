// Import React hook for managing state
import { useState } from "react";

// Import components
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function TaskTracker() {
  const [tasks, setTasks] = useState([]);       // State to store all tasks
  const [filter, setFilter] = useState("all");  // State to control filter (all, active, completed)
  const [message, setMessage] = useState("");   // State to display messages (e.g., edit restriction)

  // Function to add a new task
  function addTask(newTask) {
    const newItem = {
      text: newTask,
      completed: false
    };

    // Add new task to existing list
    setTasks([...tasks, newItem]);
  }

    // Function to delete a task based on index
  function deleteTask(indexToDelete) {
    const newTasks = tasks.filter((task, index) => {
      return index !== indexToDelete;
    });

    setTasks(newTasks);
  }

  // Function to toggle task completion (true/false)
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

  // Function to edit task text
  function editTask(indexToEdit) {

    // Restrict editing when filter is not "all"
    if (filter !== "all") {
      setMessage("Please switch to 'All' to edit tasks");
      return;
  }

  // Prompt user for updated task text
  const newText = prompt("Edit your task:");

  // Prevent empty or invalid input
  if (!newText || newText.trim() === "") return;

  // Update the selected task
  const newTasks = tasks.map((task, index) => {
    if (index === indexToEdit) {
      return { ...task, text: newText };
    } else {
      return task;
    }
  });

  setTasks(newTasks);
  setMessage(""); // clear message after success
} 

  //FILTER 
  // Creates a filtered version of tasks based on selected filter
  let filteredTasks;

  if (filter === "active") {
    filteredTasks = tasks
      .map((task, index) => ({ task, index }))    // keep index for actions
      .filter(item => item.task.completed === false);

  } else if (filter === "completed") {
    filteredTasks = tasks
      .map((task, index) => ({ task, index }))
      .filter(item => item.task.completed === true);

  } else {
    // Default: show all tasks
    filteredTasks = tasks.map((task, index) => ({ task, index }));
  }

  return (
    <div className="container">

       {/* Page title */}
      <h1>Task Tracker</h1>

      {/* Input component to add tasks */}
      <TaskInput addTask={addTask} />

      {/* Filter buttons */}
      <div className="filters">

          {/* Show all tasks */}
        <button onClick={() => setFilter("all")}
          style={{ backgroundColor: filter === "all" ? "pink" : "" }}>
        All</button>

        {/* Show active (incomplete) tasks */}
        <button onClick={() => setFilter("active")}
          style={{ backgroundColor: filter === "active" ? "pink" : "" }}>
        Active</button>

        {/* Show completed tasks */}
        <button onClick={() => setFilter("completed")}
          style={{ backgroundColor: filter === "completed" ? "pink" : "" }}> 
        Completed</button>
      </div>

       {/*MESSAGE*/}
        {message && (
          <p style={{ color: "grey", textAlign: "center" }}>
        {message}
          </p>
        )}

 {/* Task list component */}
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </div>
  );
}

// Export component
export default TaskTracker;