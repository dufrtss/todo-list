import { ChangeEvent, FormEvent, useState } from 'react'
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
    description: "Reward myself.",
    isCompleted: false
  }, {
    id: uuidv4(),
    description: "Finish the challenge.",
    isCompleted: false
  }]);
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      id: uuidv4(),
      description:  newTaskText,
      isCompleted: false
    }

    setTasks([newTask, ...tasks]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value)
  }

  function completeTask(taskToComplete: string) {
    const tasksWithCompletedOne = tasks.filter((task) => {
      if (task['id'] === taskToComplete) {
        task['isCompleted'] = !task['isCompleted'];
      }

      return task
    })

    setTasks(tasksWithCompletedOne)
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task['id'] != taskToDelete;
    })

    setTasks(tasksWithoutDeletedOne);
  }

  const isTaskListEmpty = tasks.length === 0;
  
  return (
    <>
      <Header />
      
      <main className={styles.wrapper}>
        <CreateNewTask 
          newTaskText={newTaskText} 
          handleCreateNewTask={handleCreateNewTask} 
          handleNewTaskChange={handleNewTaskChange} 
        />

        <TaskInfo tasks={tasks} />
        
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
                onDeleteTask={deleteTask}
                onCompleteTask={completeTask}
              />
            )
          })
        }
      </main>
    </>
  )
}

export default App
