"use client";
import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Todo 1", completed: true },
    { todoText: "Todo 2", completed: true },
    { todoText: "Todo 3", completed: false },
    { todoText: "Todo 4", completed: false },
  ]);

  const onClickHandler = (meraElm: any) => {
    console.log("meraElm", meraElm);

    const newTodos = todos.map((todo) => {
      console.log("todo: ", todo);
      if (todo.todoText == meraElm.todoText) {
        todo.completed = !todo.completed; 
      }
      return todo;
    });

    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (meraTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == meraTodo.todoText) return false;
      return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
    setTodos(newTodos);
  };
  return (
    <div id="tlist">
      <div > <h2>Todo List</h2></div><br/>
      <input placeholder="add todo item" value={todo} onChange={(e) => {setTodo(e.target.value);}}/>
      <button onClick={addTodo} margin-left='120px'>Add</button>
      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{ color: elm.completed ? "Blue" : "red", fontStyle: "oblique",listStyle: "none",}}
              key={elm.todoText}
            >
              <input type="checkbox" checked={elm.completed} onChange={() => { onClickHandler(elm);}}/>
              {elm.todoText}
              <button onClick={() => { deleteTodo(elm);}}>
                {"  "}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}