/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import Todo from "../Todo/Todo";
import "./Todos.css";
import useTodos from './useTodos'

export default function Todos() {
  // Replace useState with useTodos
  // remove parameter (useTodos doesn't take a parameter)
  const [todos, setTodos] = useTodos();

  if (todos !== null) {
    return (
      <div className="Todos_container">
        {todos.map((todo, index) => (
          <Todo
            key={todo.label + index}
            todo={todo}
            onDelete={() => {
              setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
            }}
            onComplete={() => {
              setTodos([
                ...todos.slice(0, index),
                { ...todo, complete: !todo.complete },
                ...todos.slice(index + 1)
              ]);
            }}
            onDuplicate={() => {
              setTodos([
                ...todos,
                { ...todo, complete: todo.complete },
                ...todos.slice(0, index)
              ]);
            }}
            onAdd={() => {
              setTodos([
                ...todos,
                { ...todo, complete: todo.complete },
                ...todos.slice(0, index)
              ]);
            }}
          />
        ))}
      </div>
    );
  }

  return <span>Waiting...</span>;
}


    // { label: "Go to Todos.js" },
    // { label: "Replace useState with useTodos" },
    // { label: "remove anything passed into useTotos" },
    // { label: "Uncomment the 'import' statement" },
    // { label: "Refresh the browser" }
