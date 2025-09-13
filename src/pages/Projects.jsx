import styles from '../components/Projects.module.css';
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h1>My Projects</h1>

      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}


function ProjectsStyle() {
  return <home className={styles.projects}>This is the projects page</home>;
}