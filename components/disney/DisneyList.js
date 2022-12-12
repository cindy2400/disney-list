import Styles from "../../styles/DisneyItem.module.scss";
import { DisneyItem } from "./DisneyItem";

export const DisneyList = ({ disneys }) => {
  return (
    <div className={Styles.disneyList}>
      {disneys.map((disney) => {
        return (
          <DisneyItem
            key={disney?._id}
            id={disney?._id}
            name={disney?.name}
            image={disney?.imageUrl}
          />
        );
      })}
    </div>
  );
};
