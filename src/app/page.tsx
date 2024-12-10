import styles from "./page.module.css";
// import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Task 1</h1>
      <div className={styles.container}>
        <div className={styles.checkboxGroup}>
    
          <div className={styles.checkbox}>
            <input type="checkbox" id="text1" />
            <label htmlFor="text1">Text 1</label>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" id="text2" />
            <label htmlFor="text2">Text 2</label>
          </div>

          <div className={styles.checkbox}>
            <input type="checkbox" id="text3" />
            <label htmlFor="text3">
              It is a long established fact that a reader will be distracted by
              the readable.
            </label>
          </div>


        {/* <Link href="/taskTwo">
          <button className={styles.button}>Go to Task Two</button>
        </Link>
 */}


        </div>
      </div>
    </div>
  );
}
