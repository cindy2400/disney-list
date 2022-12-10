import styles from "../../styles/DisneyItem.module.scss";
import { DisneyItem } from "./DisneyItem";

export const DisneyList = ({ disneys }) => {
  return (
    <div className={styles.disneyList}>
      {disneys.map((disney) => {
        return (
          <DisneyItem
            key={disney._id}
            id={disney._id}
            name={disney.name}
            image={disney.imageUrl}
          />
        );
      })}
    </div>
  );
};
