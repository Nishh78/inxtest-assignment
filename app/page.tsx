import Link from 'next/link'
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <Link href="/center-div" className={styles.card}> <h2>
          Center DIV <span>-&gt;</span>
        </h2></Link>
        <Link href="/table" className={styles.card}> <h2>
          Table <span>-&gt;</span>
        </h2></Link>
        <Link href="/data-table" className={styles.card}> <h2>
          Javascript <span>-&gt;</span>
        </h2></Link>
      </div>
    </main>
  );
}
