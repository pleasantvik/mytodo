import React, { useState } from "react";

const TodoItem = (props) => {
  const { id, title, completed } = props.todo;
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (e) => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  };

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <li>
      <div className="todo-item" onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className="list-checkbox"
          id={id}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />

        <label htmlFor={id} className="circle">
          <img src="images/icon-check.svg" alt="checkmark" className="hide" />
        </label>

        <span className="text checked">{title}</span>

        <img
          src="images/icon-cross.svg"
          alt="delete"
          onClick={() => props.delTodoProps(id)}
          className="delete"
        />
      </div>
      <input
        type="text"
        style={editMode}
        className="edit-input"
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
