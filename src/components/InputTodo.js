import React, { useState } from "react";

const InputTodo = (props) => {
  const [title, setTitle] = useState("");

  const onInputChange = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    props.addTodoProps(title);
    setTitle("");
  };
  return (
    <form action="#" className="search" onSubmit={onFormSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Create a new todo...."
        value={title}
        onChange={onInputChange}
      />
    </form>
  );
};
export default InputTodo;
