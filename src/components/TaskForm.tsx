import { CreateNewTask } from './CreateNewTask'
import { Task } from './Task'
import { TaskInfo } from './TaskInfo'

import styles from './TaskForm.module.css'

export function TaskForm() {
  return (
    <>
      <CreateNewTask />

      <TaskInfo />
      
      <Task />
      <Task />
    </>
  )
}