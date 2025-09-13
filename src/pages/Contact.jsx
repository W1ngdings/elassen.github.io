import styles from '../components/Contact.module.css';
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h1>Contact me</h1>

      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/">Home</Link>
    </div>
  );
}

function ContactStyle() {
  return <home className={styles.contact}>This is the contact page</home>;
}