import React from "react";

const TodoNav = (props) => {
  console.log(props);
  return (
    <li className="todo-item nav">
      <span className="items-left"> {props.todos.length} items left </span>

      <div className="nav-btn">
        <button className="btn all active-btn" onClick={props.all}>
          All
        </button>
        <button className="btn active" onClick={props.active}>
          Active
        </button>
        <button className="btn completed" onClick={props.completed}>
          Completed
        </button>
      </div>

      <button className="btn clear" onClick={props.clearCompletedTodo}>
        Clear Completed
      </button>
    </li>
  );
};

export default TodoNav;
