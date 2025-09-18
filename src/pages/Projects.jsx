import styles from '../components/Projects.module.css';


export default function Projects() {
  return (
    <div className={styles.background}>
      <h1 className={styles.introtext}>My previous projects</h1>

      <div className={styles.row}>
        <img className={styles.image} src="src/assets/gamedify-img.webp" alt="" />
        <p></p>
      </div>

      <div className={styles.row}>
        <img className={styles.image} src="src/assets/dengulecafe-img.webp" alt="" />
        <p></p>
      </div>

      <div className={styles.row}>
        <img className={styles.image} src="src/assets/radar-img.webp" alt="" />
        <p></p>
      </div>

      <div className={styles.row}>
        <img className={styles.image} src="src/assets/zerobuzz-img.webp" alt="" />
        <p></p>
      </div>

      <div className={styles.row}>
        <img className={styles.image} src="src/assets/kenderdubryster-img.webp" alt="" />
        <p></p>
      </div>
    </div>
  );
}


