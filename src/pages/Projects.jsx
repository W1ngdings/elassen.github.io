import styles from '../components/Projects.module.css';


export default function Projects() {
  return (
    <div className={styles.background}>
      <h1 className={styles.introtext}>My previous projects</h1>

      <div className={styles.row}>
        <img className={styles.image} src="/images/gamedify-img.webp" alt="" />
        <p className={styles.projectText}>A first semester solo project focused on making an online magazine with a focus on a subject of our own choosing. I chose to create an online magazine that focused on articles about the positive impact of gaming on ones cognitive abilities.</p>
      </div>

      <div className={styles.row}>
        <img className={styles.image} src="/images/dengulecafe-img.webp" alt="" />
        <p className={styles.projectText}>A first semester group project focused on creating a website for a local business. We chose a local cafe that we thought could use a new look for their website along with easy access to information about their menu, events and opening hours.</p>
      </div>

      <div className={styles.row}>
        <img className={styles.image} src="/images/radar-img.webp" alt="" />
        <p className={styles.projectText}>A first semester solo exam project aimed at creating a website for a local concert venue with the goal to create engagement and interest in the local music scene with the target audience being young adults.</p>
      </div>

      <div className={styles.row}>
        <img className={styles.image} src="/images/zerobuzz-img.webp" alt="" />
        <p className={styles.projectText}>A second semester group project focused on creating a non alcoholic beer brand from scratch created to appeal to a younger generation with a goal of showing that you don't need alcohol to have a good time with friends.</p>
      </div>

      <div className={styles.row}>
        <img className={styles.image} src="/images/kenderdubrysterne-img.webp" alt="" />
        <p className={styles.projectText}>A second semester group exam project made for a local natural history museum's new exhibition centered around the female body. The project was centered around breasts functions, societal views, and the female experience. The project aimed at educating local students about these topics.</p>
      </div>
    </div>
  );
}


