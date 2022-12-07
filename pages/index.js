import { DisneyList } from "../components/disney/DisneyList";
import styles from "../styles/Home.module.css";

export default function Home({ disneys }) {
  return (
    <div className={styles.container}>
      <DisneyList disneys={disneys} />
    </div>
  );
}

export async function getStaticProps() {
  const getDisneyList = await fetch("https://api.disneyapi.dev/characters");
  const response = await getDisneyList.json();
  const data = response.data;

  return {
    props: {
      disneys: data,
    },
  };
}
