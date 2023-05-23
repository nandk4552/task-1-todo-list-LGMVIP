import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
const Todo = ({ todos, completeTask, removeTask }) => {
  return todos.map((todo, index) => (
    <div
 
      className={todo.isComplete ? "complete task-div" : "task-div"}
      key={index}
    >
      <div className="todo-text">{todo.text}</div>
      <div className="icons" key={todo.id}>
        <TiTick
          className={todo.isComplete ? 'hide':'tick'}
          onClick={() => {
            completeTask(todo.id);
          }}
        />
        <RiCloseCircleFill
          className="cross"
          onClick={() => {
            removeTask(todo.id);
          }}
        />
      </div>
    </div>
  ));
};
export default Todo;
