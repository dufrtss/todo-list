import { v4 as uuidv4 } from 'uuid'

import { Header } from './components/Header'
import { Info } from './components/Info'

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
        <Info />
        <div>
          {/* map list of tasks */}
        </div>
      </div>
    </>
  )
}

export default App
