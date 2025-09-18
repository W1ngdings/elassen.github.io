import styles from '../components/Home.module.css';

export default function Home() {
  return (
    <div>
      <div className={styles.background}>
        <div className={styles.stars} />
        <div className={styles.stars2} />
        <div className={styles.stars3} />
      </div>
      <div className={styles.introtext}>
        <h1>Hi! I'm Emil Lassen</h1>
        <h2>Future Multimedia Designer</h2>
      </div>
    </div>
  );
}


