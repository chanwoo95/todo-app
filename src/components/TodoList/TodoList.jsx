import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

export default function TodoList({
  title,
  todos,
  onUpdate,
  onDelete,
  checked,
}) {
  console.log(todos);
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <ul>
        {todos.map((todo) => {
          if (todo.checked !== checked) return null;

          return (
            <TodoItem
              todo={todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
              checked={checked}
            />
          );
        })}
      </ul>
    </section>
  );
}
