import { v4 as uuidv4 } from 'uuid'

import { Header } from './components/Header'
import { Task } from './components/Task'
import { TaskForm } from './components/TaskForm'

import styles from './App.module.css'

import './global.css'
import { TaskInfo } from './components/TaskInfo'
import { CreateNewTask } from './components/CreateNewTask'

const tasks = [
  {
    id: uuidv4(),
    description: "Go out for a walk.",
    isCompleted: false
  },
  {
    id: uuidv4(),
    description: "Drink water.",
    isCompleted: false
  },
  {
    id: uuidv4(),
    description: "Read a book.",
    isCompleted: false
  }
]

function App() {
  return (
    <>
      <Header />
      
      <main className={styles.wrapper}>
        <CreateNewTask />

        <TaskInfo />

          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                description={task.description}
                isCompleted={task.isCompleted}
              />
            )
          })}
      </main>
    </>
  )
}

export default App
