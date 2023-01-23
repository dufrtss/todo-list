import { PlusCircle } from 'phosphor-react'
import styles from './CreateNewTask.module.css'

export function CreateNewTask() {
  return (
    <div className={styles.createNewTask}>
      <input type="text" placeholder="Create a new task" />
      <button type="submit">
        <p>Create</p>
        <PlusCircle size={16} weight={'bold'} />
      </button>
    </div>
  )
}