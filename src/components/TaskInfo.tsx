import styles from './TaskInfo.module.css'

interface TaskInfoProps {
  tasks: {
    isCompleted: boolean;
  }[];
}

export function TaskInfo({ tasks }: TaskInfoProps) {
  function FinishedTasks() {
    let acc = 0

    tasks.map((task) => {
      if(task['isCompleted'] === true) {
        acc = acc + 1
      }
    })

    return acc
  }

  return (
    <div className={styles.taskInfo}>
      <div>
        <span>
          Created tasks
          <strong>
            {tasks.length}
          </strong>
        </span>
      </div>

      <div>
        <span>
          Finished 
          <strong>
            {FinishedTasks() + ' of ' + tasks.length}
          </strong>
        </span>
      </div>
    </div>
  ) 
}