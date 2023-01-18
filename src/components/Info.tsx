import styles from './Info.module.css'

export function Info() {
  return (
    <>
      <section className={styles.info}>
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