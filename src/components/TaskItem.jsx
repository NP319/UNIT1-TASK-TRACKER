function TaskItem({ task, index, deleteTask }) {
  return (
    <div>
      <input type="checkbox" />
      <span>{task}</span>
      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
}

export default TaskItem;