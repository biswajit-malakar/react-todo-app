export default function PendingTasks({
  pendingTasks,
  setPendingTasks,
  completeTasks,
  setCompleteTasks,
}) {
  return (
    <ul>
      {pendingTasks.map((task) => (
        <Task
          task={task}
          pendingTasks={pendingTasks}
          setPendingTasks={setPendingTasks}
          completeTasks={completeTasks}
          setCompleteTasks={setCompleteTasks}
        />
      ))}
    </ul>
  );
}

function Task({
  task,
  pendingTasks,
  setPendingTasks,
  completeTasks,
  setCompleteTasks,
}) {
  function handleDoneClick(task) {
    setCompleteTasks([...completeTasks, task]);
    setPendingTasks(pendingTasks.filter((t) => t !== task));
  }

  function handleRemoveClick(task) {
    setPendingTasks(pendingTasks.filter((t) => t !== task));
  }
  return (
    <>
      <li>{task}</li>
      <button onClick={() => handleDoneClick(task)}>done</button>
      <button onClick={() => handleRemoveClick(task)}>remove</button>
    </>
  );
}
