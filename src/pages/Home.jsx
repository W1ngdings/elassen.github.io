import styles from '../components/Home.module.css';



export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Homepage</h1>
    </div>
  );
}

function HomeStyle() {
  return <home className={styles.home}>This is the home page</home>;
}