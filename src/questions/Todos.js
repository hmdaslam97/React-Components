import React, { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([
    "play football",
    "do workout",
    "prepare for interview",
    "pray"
  ]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const handleCheckboxChange = (index) => {
    setSelectedTodo(index);
  };
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setSelectedTodo(null);
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={selectedTodo === index}
            onChange={() => handleCheckboxChange(index)}
          />
          {todo}
          {selectedTodo === index && (
          <button onClick={() => handleDelete(index)}>Delete</button>
          )}
        </div>
      ))}
      </div>
  );
};

 

export default Todos;