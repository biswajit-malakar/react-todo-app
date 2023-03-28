export default function CompleteTasks({
  pendingTasks,
  setPendingTasks,
  completeTasks,
  setCompleteTasks,
}) {
  return (
    <ul>
      {completeTasks.map((task) => (
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
  function handleNotDoneClick(task) {
    setCompleteTasks(completeTasks.filter((t) => t !== task));
    setPendingTasks([...pendingTasks, task]);
  }

  function handleRemoveClick(task) {
    setCompleteTasks(completeTasks.filter((t) => t !== task));
  }
  return (
    <>
      <li>{task}</li>
      <button onClick={() => handleNotDoneClick(task)}>not done</button>
      <button onClick={() => handleRemoveClick(task)}>remove</button>
    </>
  );
}
