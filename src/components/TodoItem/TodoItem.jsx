import React, { useState } from "react";
import styles from "./TodoItem.module.css";
import { VscEdit } from "react-icons/vsc";
import { MdDone } from "react-icons/md";
import { BsTrash } from "react-icons/bs";

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const [edited, setEdited] = useState(true);
  const [newText, setNewText] = useState("");

  const { id, text, checked } = todo;

  const handleChecked = (e) => {
    const checked = e.target.checked;
    onUpdate({ ...todo, checked });
  };

  const handleDelete = () => onDelete(todo);

  const handleEditButton = () => {
    setEdited((prev) => !prev);
  };

  const handleSubmitButton = () => {
    if (newText.trim().length === 0) {
      return;
    }
    onUpdate({ ...todo, text: newText });
    setNewText("");
    setEdited((prev) => !prev);
  };

  const handleNewText = (e) => {
    const value = e.target.value;
    setNewText(value);
  };
  return (
    <li className={styles.todo_item}>
      <div className={styles.input_box}>
        <input
          type="checkbox"
          id={id}
          onChange={handleChecked}
          checked={checked}
        />
        {!edited ? (
          <input
            className={styles.edit_text}
            type="text"
            placeholder="수정"
            value={newText}
            onChange={handleNewText}
          />
        ) : (
          <label className={styles.text} htmlFor={id}>
            {text}
          </label>
        )}
      </div>
      <div className={styles.button_box}>
        {!edited ? (
          <button className={styles.done_button} onClick={handleSubmitButton}>
            <MdDone />
          </button>
        ) : (
          <button className={styles.edit_button} onClick={handleEditButton}>
            <VscEdit />
          </button>
        )}

        <button className={styles.delete_button} onClick={handleDelete}>
          <BsTrash />
        </button>
      </div>
    </li>
  );
}
