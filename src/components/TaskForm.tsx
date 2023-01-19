import { CreateNewTask } from './CreateNewTask'
import { Task } from './Task'
import { TaskInfo } from './TaskInfo'

export function TaskForm() {
  return (
    <>
      <CreateNewTask />

      <TaskInfo />
      
      <Task />
    </>
  )
}