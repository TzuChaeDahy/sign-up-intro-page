import styles from "./styles.module.css";

export default function Info() {
  return (
    <section className={styles.section}>
      <p className={styles.text}>
        <span className={styles.highlighted}>Try it free 7 days</span> then $20/mo. thereafter
      </p>
    </section>
  );
}
