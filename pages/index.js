import Head from "next/head";
import { useEffect, useState } from "react";
import { DisneyList } from "../components/disney/DisneyList";
import { Search } from "../components/ui/Search";
import styles from "../styles/Home.module.css";

export default function Home({ disneys }) {
  const [disney, setDisney] = useState(disneys);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getSearchDisney = async () => {
      if (searchText !== "") {
        const getDisneyBySearch = await fetch(
          `https://api.disneyapi.dev/character?name=${searchText}`
        );
        const response = await getDisneyBySearch.json();
        const data = response.data;
        setDisney(data);
      } else {
        setDisney(disneys);
      }
    };

    const searchTimeout = setTimeout(() => {
      getSearchDisney();
    }, 500);

    return () => {
      clearTimeout(searchTimeout);
    };
  }, [searchText]);

  const getSearchTextHandler = (text) => {
    setSearchText(text);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="NextJS" />
      </Head>
      <Search getSearchText={getSearchTextHandler} />
      <DisneyList disneys={disney} />
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
