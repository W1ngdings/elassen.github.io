import styles from '../components/About.module.css';


export default function About({ darkMode}) {
  return (
    <div>
      <h1 className={styles.introtext}>About Me</h1>
      <div className={styles.aboutContainer}>
        <img className={styles.portrait} src={darkMode? "/images/portraitplaceholder-dark.png": "/images/portraitplaceholder-light.png"} alt="Portrait Placeholder"/>
        <p className={styles.aboutText}>I'm Emil, a future multimedia designer and frontend developer. I'm always curious about learning new skills and improving on the skills I already possess, there's always something new to learn in my experience. I am passionate about creating and finding creative ways to give customers the best possible experience when using digital products.</p>
      </div>

    </div>
  );
}


