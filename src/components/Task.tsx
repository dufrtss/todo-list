import { Trash } from "phosphor-react";

import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.task}>
      <input id="checkbox" type="checkbox" />
      <label htmlFor="checkbox" />
      <p>Take the trash out.</p>
      <button><Trash size={16} /></button>
    </div>
  )
}