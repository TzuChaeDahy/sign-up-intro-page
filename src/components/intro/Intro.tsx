import styles from "./styles.module.css"

export default function Intro() {
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>Learn to code by watching others</h1>
      <p className={styles.description}>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </article> 
  );
}
