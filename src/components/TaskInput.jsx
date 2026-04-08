import { useState } from "react";

function TaskInput({ addTask }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return;

    addTask(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();   
      handleSubmit();
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}

export default TaskInput;