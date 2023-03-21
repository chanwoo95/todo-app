import React, { useEffect, useState } from "react";
import AddForm from "./AddForm/AddForm";
import TodoList from "./TodoList/TodoList";
import styles from "./Home.module.css";

export default function Home() {
  const [todos, setTodos] = useState(readTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };

  const handleDelete = (item) => {
    setTodos(todos.filter((todo) => todo.id !== item.id));
  };

  return (
    <section className={styles.section}>
      <AddForm onAdd={handleAdd} />
      <TodoList
        title={"할 일"}
        todos={todos}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        checked={false}
      />
      <TodoList
        title={"완료한 목록"}
        todos={todos}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        checked={true}
      />
    </section>
  );
}

function readTodos() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
