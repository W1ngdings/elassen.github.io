import styles from '../components/About.module.css';
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>About Me</h1>

      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

function AboutStyle() {
  return <home className={styles.about}>This is the about page</home>;
}
