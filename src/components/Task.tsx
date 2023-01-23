import { Trash } from "phosphor-react";

import styles from './Task.module.css';

interface TaskProps {
  description: string;
  isCompleted: boolean;
}

export function Task({ description, isCompleted }: TaskProps) {
  return (
    <div className={styles.task}>
      <input id={description} type="checkbox" />
      <label htmlFor={description} />
      <p>{description}</p>
      <button><Trash size={16} /></button>
    </div>
  )
}