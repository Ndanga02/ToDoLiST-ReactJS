import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function addNotes() {
    setTodo([...todo, input]);
  }

  function TodoList() {
    return (
      <ul>
        {todo.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="input" onChange={handleChange} type="text" />
        <button name="pushBtn" onClick={addNotes}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
