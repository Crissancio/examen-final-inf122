import styles from "./page.module.css";
import Pokedex from "./components/pokedex";

export default function Home() {
  return (
    <main className={styles.main}>
      <Pokedex />
    </main>
  );
}
