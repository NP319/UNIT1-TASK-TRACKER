import { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (indexToDelete) => {
  const updatedTasks = tasks.filter((task, index) => index !== indexToDelete);
  setTasks(updatedTasks);
};
  return (
    <div className="container">
      <h1>Daily Task Tracker</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default Home;