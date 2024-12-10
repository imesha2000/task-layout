import styles from "./taskTwo.module.css";

export default function TaskTwo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Task 2</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Title 1</h2>
          <p className={styles.subTitle}>Sub Title</p>
          <p className={styles.text}>
            It is a long established fact that a reader will be distracted by the readable.
          </p>
          <button className={styles.button}>Action Button</button>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Title 2</h2>
          <p className={styles.subTitle}>Sub Title</p>
          <p className={styles.text}>It is a long text.</p>
          <button className={styles.button}>Action Button</button>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Title 3</h2>
          <p className={styles.subTitle}>Sub Title</p>
          <button className={styles.button}>Action Button</button>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Title 4</h2>
          <p className={styles.subTitle}>Sub Title</p>
          <button className={styles.button}>Action Button</button>
        </div>
      </div>
    </div>
  );
}
