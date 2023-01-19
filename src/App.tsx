import { v4 as uuidv4 } from 'uuid'

import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'

import styles from './App.module.css'

import './global.css'

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
      
      <div className={styles.wrapper}>
        <TaskForm />
      </div>
    </>
  )
}

export default App
