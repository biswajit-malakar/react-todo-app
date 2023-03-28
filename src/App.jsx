import React, { useState } from "react";
import PendingTasks from "./components/PendingTasks";
import CompleteTasks from "./components/CompleteTasks";
import Form from "./components/Form";

export default function App() {
  let [pendingTasks, setPendingTasks] = useState([]);
  let [completeTasks, setCompleteTasks] = useState([]);

  return (
    <>
      <div className="form-section">
        <h2>add tasks</h2>
        <Form setPendingTasks={setPendingTasks} pendingTasks={pendingTasks} />
      </div>
      <div className="pending-tasks-section">
        <h2>pending tasks</h2>
        <PendingTasks
          pendingTasks={pendingTasks}
          setPendingTasks={setPendingTasks}
          completeTasks={completeTasks}
          setCompleteTasks={setCompleteTasks}
        />
      </div>
      <div className="complete-tasks-section">
        <h2>complete tasks</h2>
        <CompleteTasks
          pendingTasks={pendingTasks}
          setPendingTasks={setPendingTasks}
          completeTasks={completeTasks}
          setCompleteTasks={setCompleteTasks}
        />
      </div>
    </>
  );
}
