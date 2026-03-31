import { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return;

    addTask(input);
    setInput("");
  };

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}

export default TaskInput;