import React from "react";
import styles from "../TODOPage.module.css";
import { ReactComponent as PlusIcon } from "../plus_icon.svg";

// PUBLIC_INTERFACE
function FABAddTodo({ onClick }) {
  /** Floating action button for adding a new todo */
  return (
    <button
      className={styles.fabAddTodo}
      aria-label="Add New ToDo"
      onClick={onClick}
    >
      <span className={styles.fabPlusIcon}>
        <PlusIcon style={{ width: 24, height: 24 }} />
      </span>
    </button>
  );
}

export default FABAddTodo;
