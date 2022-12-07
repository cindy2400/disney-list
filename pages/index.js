import { DisneyList } from "../components/disney/DisneyList";
import { Search } from "../components/ui/Search";
import styles from "../styles/Home.module.css";

export default function Home({ disneys }) {
  const getSearchTextHandler = (text) => {
    console.log(text);
  };

  return (
    <div className={styles.container}>
      <Search getSearchText={getSearchTextHandler} />
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
