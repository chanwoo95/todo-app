import React, { useState } from "react";
import styles from "./AddForm.module.css";
import uuid from "react-uuid";

export default function AddForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuid(), text, checked: false });
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.header}>
        <input
          className={styles.input}
          type="text"
          value={text}
          placeholder="할 일을 입력해주세요"
          onChange={handleChange}
        />
        <button className={styles.button}>추가</button>
      </form>
    </header>
  );
}
