import Image from "next/image";
import styles from "../../styles/DisneyDetail.module.scss";
import { Card } from "../ui/Card";

export const DisneyDetail = ({ name, image, tvShows }) => {
  return (
    <Card classname={styles.container}>
      <h2>
        <u>{name}</u>
      </h2>
      <p>TV Show : </p>
      {tvShows.length === 0 ? (
        <p>No data available</p>
      ) : (
        tvShows.map((tvShow) => <Card key={name}>{tvShow}</Card>)
      )}
      <Image
        className={styles.image}
        alt={name}
        src={image}
        width={300}
        height={300}
      />
    </Card>
  );
};
