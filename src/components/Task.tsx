import { Trash } from "phosphor-react";

import styles from './Task.module.css';

interface TaskProps {
  id: string;
  description: string;
  isCompleted: boolean;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

export function Task({ id, description, isCompleted, onDeleteTask, onCompleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCompleteTask() {
    onCompleteTask(id);
  }

  return (
    <div className={styles.task}>
      <input id={id} type="checkbox" onClick={handleCompleteTask} />
      <label htmlFor={id} />
      {isCompleted ? <p className={styles.completed}>{description}</p> : <p>{description}</p>}
      <button onClick={handleDeleteTask} title="Delete comment">
        <Trash size={16} />
      </button>
    </div>
  )
}