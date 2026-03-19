import TaskItem from "./TaskItem";
function TaskList({tasks}) {
  return (
    <div>
      <h2>Task List</h2>

      {tasks.map((task, index) => (
        <TaskItem key={index} task={(task)} />
      ))}  
    </div>
  );
}

export default TaskList;