import styles from '../components/Contact.module.css';
import { NavLink } from "react-router-dom";

export default function Contact({darkMode}) {
  return (
    <div>
      <h1 className={styles.introtext}>Reach out to me here!</h1>
      <div className={styles.socials}>
        <NavLink to='https://www.instagram.com/wingdingsss' end> <img src={darkMode? "/images/instagram-dark.png": "/images/instagram-light.png"} alt="Instagram"/></NavLink>

        <NavLink to='https://www.facebook.com/emil.hedemannlassen?locale=da_DK' end> <img src={darkMode? "/images/facebook-dark.png": "/images/facebook-light.png"} alt="Facebook"/></NavLink>

        <NavLink to='https://www.linkedin.com/in/emil-lassen-bb0755385' end> <img src={darkMode? "/images/linkedin-dark.png": "/images/linkedin-light.png"} alt="LinkedIn"/></NavLink>

        <NavLink to='https://github.com/W1ngdings' end> <img src={darkMode ? "/images/github-dark.png" : "/images/github-light.png"} alt="GitHub"/></NavLink>

        <h2 className={styles.email}>Or email me at: Emil35126@hotmail.com</h2>
      </div>
    </div>
  );
}

