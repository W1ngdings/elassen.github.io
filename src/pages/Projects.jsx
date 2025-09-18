import styles from '../components/Projects.module.css';


export default function Projects() {
  return (
    <div className={styles.background}>
      <h1 className={styles.introtext}>My previous projects</h1>

      <div className={styles.row}>
        <img className={styles.image} src="public/images/gamedify-img.webp" alt="" />
        <p></p>
      </div>

      <div className={styles.row}>
        <img className={styles.image} src="public/images/dengulecafe-img.webp" alt="" />
        <p></p>
      </div>

      <div className={styles.row}>
        <img className={styles.image} src="public/images/radar-img.webp" alt="" />
        <p></p>
      </div>

      <div className={styles.row}>
        <img className={styles.image} src="public/images/zerobuzz-img.webp" alt="" />
        <p></p>
      </div>

      <div className={styles.row}>
        <img className={styles.image} src="public/images/kenderdubrysterne-img.webp" alt="" />
        <p></p>
      </div>
    </div>
  );
}


