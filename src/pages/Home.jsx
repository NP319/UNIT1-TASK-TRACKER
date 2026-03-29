import { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);

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


  return (
    <div className="container">
      <h1>Daily Task Tracker</h1>
      <TaskInput addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        toggleTask={toggleTask} 
        updateTask={updateTask}
      />
    </div>
  );
}

export default Home;