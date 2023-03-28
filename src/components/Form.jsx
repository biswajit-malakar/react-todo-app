import { useState } from "react";

export default function Form({ setPendingTasks, pendingTasks }) {
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    setPendingTasks([...pendingTasks, task]);
    setTask("");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        placeholder="write your task"
        value={task}
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">add</button>
    </form>
  );
}
