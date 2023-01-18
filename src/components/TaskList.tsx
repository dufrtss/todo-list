import styles from './TaskList.module.css'

export function TaskList() {
  return (
    <>
      <header className={styles.header}>
        <div>
          <span>Created tasks <strong>5</strong> </span>
        </div>

        <div>
          <span>Finished <strong>2 de 5</strong> </span>
        </div>
      </header>

      <section className={styles.taskList}>
        List of tasks
      </section>
    </>
  )
}