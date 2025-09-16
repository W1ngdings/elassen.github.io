import styles from '../components/Home.module.css';

export default function Home() {
  return (
    <div>
      <div id='home' className={styles.background}>
        <div className={styles.stars} />
        <div className={styles.stars2} />
        <div className={styles.stars3} />
      </div>
      <div className={styles.introtext}>
        <h1>Hej! Jeg er Emil Lassen</h1>
        <h2>Fremtidig Multimedie Designer</h2>
      </div>
    </div>
  );
}


