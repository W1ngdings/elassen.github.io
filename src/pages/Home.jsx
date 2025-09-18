import styles from '../components/Home.module.css';
import 'animate.css';

export default function Home() {
  return (
    <div>
      <div>
        <div className={styles.stars} />
        <div className={styles.stars2} />
        <div className={styles.stars3} />
      </div>
      <div className={styles.introtext}>
        <h1>Hi! I'm Emil Lassen</h1>
        <h2 className="animate__animated animate__fadeIn animate__delay-1s">
          Future Frontend Developer
        </h2>
      </div>
    </div>
  );
}


