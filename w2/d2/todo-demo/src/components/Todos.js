import React, { useState } from "react";

const Todos = (props) => {
  const [tasks, setTasks] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      title: todoTitle,
      isDone: false,
    };

    // send setTasks a brand NEW array that has all the existing tasks in it, plus one new task
    setTasks([...tasks, newTask]);

    // clear input box
    setTodoTitle("");
  };

  const handleDelete = (delIdx) => {
    const filteredTasks = tasks.filter((task, idx) => {
      // if the idx is NOT the delIdx, this returns true, which means the item is kept
      return idx !== delIdx;
    });

    setTasks(filteredTasks);

    // shorthand
    // setTasks(tasks.filter((task, idx) => idx !== delIdx));
  };

  const toggleIsComplete = (idx) => {
    const selectedTask = tasks[idx];
    selectedTask.isDone = !selectedTask.isDone;

    setTasks([...tasks]);
  };

  return (
    <div>
      <h2>Your Tasks</h2>

      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
        // handleSubmit will auotmatically be passed event if written like this
        // onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={todoTitle}
          onChange={(event) => {
            setTodoTitle(event.target.value);
          }}
        />{" "}
        <button>New Task</button>
      </form>

      {tasks.map((task, idx) => {
        let styleObj = {};

        if (task.isDone === true) {
          styleObj.color = "green";
        }

        return (
          <div key={idx}>
            {task.isDone === true ? (
              <span style={{ color: "green" }}>&#10003;</span>
            ) : (
              ""
            )}
            <span style={styleObj}>{task.title}</span>{" "}
            <input
              type="checkbox"
              onChange={(event) => {
                toggleIsComplete(idx);
              }}
            />
            <button
              onClick={(event) => {
                handleDelete(idx);
              }}
            >
              Eliminate Task
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
