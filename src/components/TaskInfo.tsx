import styles from './TaskInfo.module.css'

export function TaskInfo() {
  return (
    <>
      <section className={styles.taskInfo}>
        <div>
          <span>Created tasks <strong>5</strong></span>
        </div>

        <div>
          <span>Finished <strong>2 de 5</strong></span>
        </div>
      </section>
    </>
  )
}