import styles from "../../styles/DisneyItem.module.scss";
import { DisneyItem } from "./DisneyItem";

export const DisneyList = ({ disneys }) => {
  console.log(disneys);
  return (
    <div className={styles.disneyList}>
      {disneys.map((disney) => {
        return <DisneyItem name={disney.name} image={disney.imageUrl} />;
      })}
    </div>
  );
};
