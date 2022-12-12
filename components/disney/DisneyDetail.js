import Image from "next/image";
import { useState } from "react";
import Styles from "../../styles/DisneyDetail.module.scss";
import { Card } from "../ui/Card";

export const DisneyDetail = ({ id, name = "", image, tvShows }) => {
  const [img, setImg] = useState(image);

  return (
    <Card classname={Styles.container}>
      <h2>
        <u>{name}</u>
      </h2>
      <p>TV Show : </p>
      {tvShows?.length === 0 ? (
        <p>No data available</p>
      ) : (
        tvShows?.map((tvShow) => <Card key={id}>{tvShow}</Card>)
      )}
      <Image
        className={Styles.image}
        alt={name}
        src={img ? img : "/noImage.png"}
        onError={() => setImg("/noImage.png")}
        width={300}
        height={300}
      />
    </Card>
  );
};
