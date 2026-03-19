function TaskItem({task}) {
  return (
    <div>
      <input type="checkbox" />
      <span>{task}</span>
      <button>Delete</button>
    </div>
  );
}

export default TaskItem;