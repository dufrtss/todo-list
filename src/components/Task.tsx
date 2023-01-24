import { Trash } from "phosphor-react";

import styles from './Task.module.css';

interface TaskProps {
  id: string;
  description: string;
  isCompleted: boolean;
}

export function Task({ id, description, isCompleted }: TaskProps) {
  // function isTaskCompleted(isCompleted: boolean) {
  //   console.log(isCompleted)
  //   return isCompleted
  // }

  return (
    <div className={styles.task}>
      <input id={id} type="checkbox" onClick={() => isCompleted = true} />
      <label htmlFor={id} />
      <p>{description}</p>
      <button><Trash size={16} /></button>
    </div>
  )
}