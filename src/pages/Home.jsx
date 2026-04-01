import { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (newTask) => {
  const taskObj = {
    text: newTask,
    completed: false
  };
  setTasks([...tasks, taskObj]);
};
  
  const deleteTask = (indexToDelete) => {
  const updatedTasks = tasks.filter((task, index) => index !== indexToDelete);
  setTasks(updatedTasks);
};

  const toggleTask = (indexToToggle) => {
  const updatedTasks = tasks.map((task, index) => {
    if (index === indexToToggle) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });

  setTasks(updatedTasks);
};

  const updateTask = (indexToUpdate, newText) => {
  const updatedTasks = tasks.map((task, index) => {
    if (index === indexToUpdate) {
      return { ...task, text: newText };
    }
    return task;
  });

  setTasks(updatedTasks);
};
  
  const filteredTasks = tasks.filter((task) => {
  if (filter === "active") return !task.completed;
  if (filter === "completed") return task.completed;
  return true; // all
});



  return (
    <div className="container">
      <h1>Daily Task Tracker</h1>
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

export default Home;