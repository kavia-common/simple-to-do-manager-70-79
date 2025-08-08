import React from "react";
import styles from "../TODOPage.module.css";
import { ReactComponent as PlaylistIcon } from "../playlist_icon.svg";
import { ReactComponent as TickIcon } from "../tick_icon.svg";

// PUBLIC_INTERFACE
function TODONavBar({ activeTab, onTabChange }) {
  /**
   * Displays navigation bar for "All" and "Completed" filters.
   *
   * @param {number} activeTab - tab index, 0 for All, 1 for Completed
   * @param {function} onTabChange - callback taking tab idx
   */
  return (
    <nav className={styles.navBar}>
      <div
        className={`${styles.navItem} ${activeTab === 0 ? styles.navItemActive : ""}`}
        onClick={() => onTabChange(0)}
      >
        <span className={styles.navIcon}><PlaylistIcon style={{ width: 30, height: 30 }} /></span>
        <span className={styles.navLabel}>All</span>
      </div>
      <div
        className={`${styles.navItem} ${activeTab === 1 ? styles.navItemActive : ""}`}
        onClick={() => onTabChange(1)}
      >
        <span className={styles.navIcon}><TickIcon style={{ width: 30, height: 30 }} /></span>
        <span className={styles.navLabel}>Completed</span>
      </div>
    </nav>
  );
}

export default TODONavBar;
