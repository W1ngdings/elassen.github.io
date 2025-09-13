import styles from '../components/Home.module.css';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Homepage</h1>

      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

function HomeStyle() {
  return <home className={styles.home}>This is the home page</home>;
}