import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Header } from './components/Header'
import { CreateNewTask } from './components/CreateNewTask'
import { TaskInfo } from './components/TaskInfo'
import { Task } from './components/Task'

import { Clipboard } from 'phosphor-react'

import styles from './App.module.css'

import './global.css'

function App() {
  const [tasks, setTasks] = useState([{
    id: uuidv4(),
    description: "Go out for a walk.",
    isCompleted: false
  }]);

  const isTaskListEmpty = tasks.length === 0;
  
  return (
    <>
      <Header />
      
      <main className={styles.wrapper}>
        <CreateNewTask />

        <TaskInfo />
        
        {/* Check if tasks exist through the length of the array and map through existing ones */}
        {isTaskListEmpty ? 
          <div className={styles.emptyList}>
            <Clipboard size={56} />
            <strong>Currently, you have no tasks</strong>
            <p>Create new tasks above</p>
          </div>  
        :
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
                isCompleted={task.isCompleted}
              />
            )
          })
        }
      </main>
    </>
  )
}

export default App
