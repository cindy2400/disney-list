import Head from "next/head";
import { DisneyDetail } from "../components/disney/DisneyDetail";

const disneyDetail = ({ disney }) => {
  return (
    <>
      <Head>
        <title>{disney.name}</title>
      </Head>
      <DisneyDetail
        id={disney._id}
        name={disney.name}
        image={disney.imageUrl}
        tvShows={disney.tvShows}
      />
    </>
  );
};

export async function getStaticPaths() {
  const getDisneyList = await fetch(
    "https://api.disneyapi.dev/character?name="
  );
  const response = await getDisneyList.json();
  const data = response.data;

  return {
    paths: data.map((item) => ({
      params: { disneyId: item._id.toString() },
    })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const disneyId = context.params.disneyId;

  const getDetailDisney = await fetch(
    `https://api.disneyapi.dev/characters/${disneyId}`
  );
  const data = await getDetailDisney.json();

  return {
    props: {
      disney: data,
    },
  };
}

export default disneyDetail;
