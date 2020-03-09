import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  // can do: onChange={onChangeHandler}
  // or what we have below on the input box
  const onChangeHandler = event => {
    setNewTodoTitle(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // slice technique to setTodos
    // const todosCopySlice = todos.slice();
    // todosCopySlice.push(newTodoTitle);
    // setTodos(todosCopySlice);

    // spread technique to setTodos
    // create new array, spread all the current todos, plus add one new todo object
    const newTodo = { title: newTodoTitle, isComplete: false };

    setTodos([...todos, newTodo]);

    // reset input box to be empty
    setNewTodoTitle("");
  };

  // alternative to .map
  const renderTodos = () => {
    const todosJSX = [];

    for (let i = 0; i < todos.length; ++i) {
      todosJSX.push(
        <div key={i}>
          <span>{todos[i]}</span> <input type="checkbox" />
          <button>Delete</button>
        </div>
      );
    }
    return todosJSX;
  };

  const toggleIsComplete = selectedIdx => {
    const selectedTodo = todos[selectedIdx];
    const oppositeIsComplete = !selectedTodo.isComplete;
    selectedTodo.isComplete = oppositeIsComplete;

    setTodos([...todos]);
  };

  const handleDelete = deleteIdx => {
    const filteredTodos = todos.filter((todo, i) => deleteIdx !== i);
    setTodos(filteredTodos);
  };

  return (
    <div>
      {/* {renderTodos()} */}

      {todos.map((todo, i) => {
        let classesToAdd = "";

        if (todo.isComplete === true) {
          classesToAdd += "line-through ";
        }

        if (todo.title.toLowerCase().includes("urgent")) {
          classesToAdd += " red ";
        }

        return (
          <div key={i}>
            <span className={classesToAdd}>{todo.title}</span>{" "}
            <input onChange={event => toggleIsComplete(i)} type="checkbox" />
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        );
      })}

      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={event => setNewTodoTitle(event.target.value)}
          placeholder="Just ToDo It"
          value={newTodoTitle}
        />
        {/* <input type="text" onChange={onChangeHandler} /> */}
        <button>Add</button>
      </form>
    </div>
  );
};

export default Todos;
