import { DisneyDetail } from "../components/disney/DisneyDetail";

const disneyDetail = ({ disney }) => {
  return <DisneyDetail name={disney.name} />;
};

export async function getStaticPaths() {
  const getDisneyList = await fetch("https://api.disneyapi.dev/characters");
  const response = await getDisneyList.json();
  const data = response.data;

  return {
    fallback: false,
    paths: data.map((item) => ({
      params: { disneyId: item._id.toString() },
    })),
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
