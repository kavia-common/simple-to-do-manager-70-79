import React from "react";
import styles from "../TODOPage.module.css";
import { ReactComponent as CheckIcon } from "../check_icon.svg";
import { ReactComponent as TrashIcon } from "../trash_icon.svg";
import { ReactComponent as EditIcon } from "../edit_icon.svg";

// PUBLIC_INTERFACE
function TODOCard({ title, subtitle, completed, onCheck, onDelete, onEdit }) {
  /**
   * Card component for a single todo item.
   * @param {string} title
   * @param {string} subtitle
   * @param {boolean} completed
   * @param {function} onCheck
   * @param {function} onDelete
   * @param {function} onEdit
   */
  return (
    <div className={styles.todoCard}>
      <div className={styles.todoTitles}>
        <div className={styles.todoTitleMain}>{title}</div>
        <div className={styles.todoSubTitle}>{subtitle}</div>
      </div>
      <div className={styles.todoActions}>
        <button
          className={styles.actionBtn}
          aria-label={completed ? "Undo Complete" : "Complete"}
          onClick={onCheck}
        >
          <CheckIcon style={{ width: 25, height: 25 }} />
        </button>
        <button
          className={styles.actionBtn}
          aria-label="Delete"
          onClick={onDelete}
        >
          <TrashIcon style={{ width: 25, height: 25 }} />
        </button>
        <button
          className={styles.actionBtn}
          aria-label="Edit"
          onClick={onEdit}
        >
          <EditIcon style={{ width: 25, height: 25 }} />
        </button>
      </div>
    </div>
  );
}

export default TODOCard;
