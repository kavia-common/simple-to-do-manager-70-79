import React from "react";
import styles from "../TODOPage.module.css";

// PUBLIC_INTERFACE
function TODOStatusBar() {
  /** Displays the mobile-style status bar at the top of the screen */
  return (
    <div className={styles.statusBar}>
      <div className={styles.statusNotch}></div>
      <div className={styles.statusIcons}>
        <span className={styles.statusIcon} />
        <span className={styles.statusIcon} />
        <span className={styles.statusIcon} />
      </div>
      <span className={styles.statusIndicator} />
      <span className={styles.statusTime}>9:41</span>
    </div>
  );
}

export default TODOStatusBar;
