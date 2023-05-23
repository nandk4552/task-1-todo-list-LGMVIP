import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  //array to hold all todos
  const [todos, settodos] = useState([]);

  //function to add todo
  const addTask = (task) => {
    // if no task
    if (!task.text) {
      return;
    }
    const newTodos = [...todos, task];
    settodos(newTodos);
  };

  //Remove  todo from list
  const removeTask = (id) => {
    const removetodo = [...todos].filter((todo) => todo.id !== id);

    settodos(removetodo);
  };

  //Task is completed
  const completeTask = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });
    settodos(updatedTodos);
  };
  return (
    <div>
      <h1 className="title">
        TODO LIST APP <span>✔️</span>
      </h1>

      <TodoForm addTask={addTask} />
      <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} />
    </div>
  );
}

export default TodoList;
