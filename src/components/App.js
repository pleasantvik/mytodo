import React, { useEffect, useState } from "react";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import Header from "./Header";
import TodoNav from "./TodoNav";
// import { act } from "react-dom/test-utils";

const App = () => {
  const [todos, setTodos] = useState(getInitialTodos());
  const [color, setColor] = useState(true);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  const handleChange = (id) => {
    const checkTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });

    /*
    const completedTodo = checkTodos.filter((todo) => {
      if (todo.completed) {
        return todo;
      }
    });
    */
    const completedTodo = checkTodos.filter((todo) => todo.completed === true);

    const activeTodo = checkTodos.filter((todo) => todo.completed === false);

    // const activeTodo = checkTodos.filter((todo) => {
    //   if (!todo.completed) {
    //     return todo;
    //   }

    // });
    localStorage.setItem("completedTodo", JSON.stringify(completedTodo));
    localStorage.setItem("activeTodo", JSON.stringify(activeTodo));

    setTodos(checkTodos);
  };

  const deleteTodo = (id) => {
    console.log("click", id);

    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodo = (title) => {
    const newTodo = {
      title,
      id: uuidv4(),
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };
  // function getInitialTodos() {
  //   const temp = localStorage.getItem("todos");
  //   const savedTodos = JSON.parse(temp);

  //   return savedTodos || [];
  // }

  function getInitialTodos() {
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);

    return savedTodos || [];
  }

  function completedTodo() {
    const temp = localStorage.getItem("completedTodo");
    const savedTodos = JSON.parse(temp);
    if (!savedTodos) return;
    setTodos(savedTodos);
    // if (savedTodos === null) {
    //   setTodos(todos);
    // } else {
    //   setTodos(savedTodos);
    // }
  }

  function activeTodos() {
    const temp = localStorage.getItem("activeTodo");
    const savedTodos = JSON.parse(temp);
    if (!savedTodos) return;
    setTodos(savedTodos);
    // if (savedTodos === null) {
    //   setTodos(todos);
    // } else {
    //   setTodos(savedTodos);
    // }
  }

  function allTodo() {
    const getActive = JSON.parse(localStorage.getItem("activeTodo"));

    const getCompleted = JSON.parse(localStorage.getItem("completedTodo"));

    // const allTodo = [...getActive, ...getCompleted];
    const allTodo = [].concat(getActive, getCompleted);

    if (allTodo.includes(null) === true) {
      const allnewtodos = allTodo.filter((el) => {
        return el !== null;
      });
      if (allnewtodos.length === 0) {
        setTodos(todos);
      } else {
        setTodos(allnewtodos);
      }
    } else {
      setTodos(allTodo);
    }
  }

  // const ref = useRef();

  const themeChanger = () => {
    setColor(!color);
  };

  function clearCompletedTodo() {
    // clearing completed todo from memory when clicked
    localStorage.removeItem("completedTodo");
  }
  // useEffect(() => {}, [color]);

  // const allTodo = () => {
  //   setTodos([
  //     ...todos.map((todo) => {
  //       return todo;
  //     }),
  //   ]);
  //   console.log("all todo", todos.length);
  // };

  // const activeTodo = () => {
  //   const all = todos;
  //   console.log(all);
  //   setTodos([
  //     ...all.filter((todo) => {
  //       return !todo.completed;
  //     }),
  //   ]);
  // };
  // allTodo();

  return (
    <div className={`container ${color ? `sun` : "moon"}`}>
      <main>
        <Header changeTheme={themeChanger} />
        <InputTodo addTodoProps={addTodo} />
        <TodoList
          todos={todos}
          handleChangeProps={handleChange}
          delTodoProps={deleteTodo}
          setUpdate={setUpdate}
        />
        <TodoNav
          active={activeTodos}
          completed={completedTodo}
          all={allTodo}
          todos={todos}
          clearCompletedTodo={clearCompletedTodo}
        />
      </main>
    </div>
  );
};

export default App;
