import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent } from 'react';

import styles from './CreateNewTask.module.css'

interface createNewTaskProps {
  newTaskText: string;
  handleCreateNewTask:(event: FormEvent<Element>) => void;
  handleNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function CreateNewTask({ newTaskText, handleCreateNewTask, handleNewTaskChange }: createNewTaskProps) {
  return (
    <form onSubmit={handleCreateNewTask} className={styles.createNewTask}>
      <input 
        type="text" 
        placeholder="Create a new task"
        value={newTaskText}
        onChange={handleNewTaskChange}
        required
      />
      <button type="submit">
        <p>Create</p>
        <PlusCircle size={16} weight={'bold'} />
      </button>
    </form>
  )
}