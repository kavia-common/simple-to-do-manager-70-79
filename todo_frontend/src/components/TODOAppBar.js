import React from "react";
import styles from "../TODOPage.module.css";
import { ReactComponent as CalendarIcon } from "../calendar_icon.svg";

// PUBLIC_INTERFACE
function TODOAppBar() {
  /** Displays the colored app bar header with calendar icon and title */
  return (
    <header className={styles.appBar}>
      <span className={styles.calendarIcon} aria-label="Calendar" role="img">
        <CalendarIcon style={{ width: "60px", height: "60px" }} />
      </span>
      <div className={styles.todoTitle}>TODO APP</div>
    </header>
  );
}

export default TODOAppBar;
