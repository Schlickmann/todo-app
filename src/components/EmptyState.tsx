import clipboardIcon from "../assets/Clipboard.svg";

import styles from "./EmptyState.module.css";

export function EmptyState() {
  return (
    <div className={styles.emptyState}>
      <img src={clipboardIcon} alt="" />
      <div className={styles.textWrapper}>
        <strong>You don't have any Todos</strong>
        <p>Create and organize your work</p>
      </div>
    </div>
  );
}
