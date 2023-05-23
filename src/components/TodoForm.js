import React, { useState } from "react";

function TodoForm({ addTask }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    // Logic for submitting a todo
    e.preventDefault();
    addTask({
      id: Math.floor(Math.random() * 10000000),
      text: input,
      isComplete: false,
    });
    setInput("");
  };
  return (
    <form className="todo-form">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter a todo"
        name="input"
        className="todo-input"
        value={input}
      />
      <button onClick={handleSubmit} type="submit" className="todo-btn">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
